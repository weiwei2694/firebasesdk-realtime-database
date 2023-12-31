"use server";
import { db } from "@/lib/db";
import { ref, set, get, remove } from "firebase/database";
import { revalidatePath } from "next/cache";

export const createPost = ({
    id,
    title,
    content,
    path,
}: {
    id: number;
    title?: string | null;
    content?: string | null;
    path: string;
}) => {
    try {
        if (!title || !content)
            return { error: "title or content must be required" };

        const post = set(ref(db, `posts/${id}`), {
            id,
            title,
            content,
        });

        revalidatePath(path);

        return post;
    } catch (error: any) {
        throw new Error(`createPost Error: ${error.message}`);
    }
};

export const fetchPosts = async () => {
    try {
        const data = await get(ref(db, "posts")).then((snapshot) => {
            if (snapshot.exists()) return snapshot.val();
            return {};
        });

        return data;
    } catch (error: any) {
        throw new Error(`fetchPosts Error: ${error.message}`);
    }
};

export const deletePostAction = async ({
    postId,
    path,
}: {
    postId: number;
    path: string;
}) => {
    try {
        await remove(ref(db, `posts/${postId}`));

        revalidatePath(path);
    } catch (error: any) {
        throw new Error(`deletePost Error: ${error.message}`);
    }
};
