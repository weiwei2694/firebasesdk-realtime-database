"use client";
import { useTransition } from "react";
import { usePathname } from "next/navigation";
import { deletePostAction } from "@/actions/post.actions";
import { Post } from "@/interfaces/post.interfaces";

interface Props {
    key: number;
    post: Post;
}

const PostCard = ({ post }: Props) => {
    const path = usePathname();

    const [isPending, startTransition] = useTransition();

    const deletePost = (postId: number) => {
        const hasConfirmed = confirm(
            "Are you sure you want to delete this post?"
        );

        if (!hasConfirmed) return;

        startTransition(() =>
            deletePostAction({
                postId,
                path,
            })
        );
    };

    return (
        <div className="flex flex-col gap-4 bg-white rounded-xl p-3 h-fit w-full">
            <h4 className="font-medium text-gray-900">{post.title}</h4>

            <p className="text-sm text-gray-700">{post.content}</p>

            <div className="flex justify-end">
                <button
                    type="button"
                    className="bg-red-500 px-8 py-2 rounded-xl text-white font-medium"
                    onClick={() => deletePost(post.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default PostCard;
