"use server";
import { db } from "@/lib/db";
import { ref, set } from "firebase/database";

export const createPost = async ({
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
