"use client";
import { createPost } from "@/actions/post.actions";
import { useState } from "react";

const CreatePost = () => {
    const [error, setError] = useState<string>("");

    const action = async (formData: FormData) => {
        const data = {
            id: new Date().getTime(),
            title: formData.get("title")?.toString(),
            content: formData.get("content")?.toString(),
        };

        const res = await createPost(data);

        if (res?.error) setError(res.error);
    };

    return (
        <form
            action={action}
            className="flex flex-col gap-6 bg-gray-900 p-6 rounded-xl"
        >
            {/* display error msg */}
            {error && <p className="text-red-400 tracking-wide font-medium">{error}</p>}

            {/* input */}
            <input
                type="text"
                placeholder="Title"
                name="title"
                id="content"
                className="outline-none border-none py-2 px-4 rounded-lg text-white bg-gray-800 placeholder:text-gray-300"
            />

            {/* textarea */}
            <textarea
                name="content"
                id="content"
                rows={8}
                placeholder="Content"
                className="outline-none border-none py-2 px-4 rounded-lg text-white bg-gray-800 placeholder:text-gray-300"
            ></textarea>

            {/* submit btn */}
            <button
                type="submit"
                className="rounded-xl bg-indigo-500 text-center py-3 px-6"
            >
                Create Post
            </button>
        </form>
    );
};

export default CreatePost;
