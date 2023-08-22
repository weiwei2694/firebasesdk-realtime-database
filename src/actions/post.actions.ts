"use server";
import { db } from "@/lib/db";
import { ref, set, get } from "firebase/database";

export const createPost = ({
    id,
    title,
    content,
}: {
    id: number;
    title?: string | null;
    content?: string | null;
}) => {
    try {
        if (!title || !content)
            return { error: "title or content must be required" };

        const post = set(ref(db, `posts/${id}`), {
            title,
            content,
        });

        return post;
    } catch (error: any) {
        throw new Error(`createPost Error: ${error.message}`);
    }
};

export const fetchPosts = async () => {
    try {
        const data = await get(ref(db, "posts")).then((snapshot) => {
            if (snapshot.exists()) return snapshot.val();
        });

        return data;
    } catch (error: any) {
        throw new Error(`fetchPosts Error: ${error.message}`);
    }
};
