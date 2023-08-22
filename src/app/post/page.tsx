import { fetchPosts } from "@/actions/post.actions";
import Link from "next/link";

interface Post {
    content: string;
    title: string;
}

const PostPage = async () => {
    const posts: Post = await fetchPosts();

    // show posts
    const showPosts = () => {
        return Object.values(posts).length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-evenly">
                {Object.values(posts).map((post) => (
                    <div
                        key={new Date().getTime().toString()}
                        className="flex flex-col gap-4 bg-white rounded-xl p-3"
                    >
                        <h4 className="font-medium text-gray-900">
                            {post.title}
                        </h4>

                        <p className="text-sm text-gray-700">{post.content}</p>
                    </div>
                ))}
            </div>
        ) : (
            <p className="text-white">no posts</p>
        );
    };

    return (
        <section>
            <div className="flex justify-between">
                <h1 className="text-xl sm:text-3xl text-white">List Posts</h1>

                <Link
                    href="/post/create"
                    className="px-8 py-2 bg-indigo-500 text-white rounded-xl font-medium"
                >
                    Create
                </Link>
            </div>

            <div className="mt-16">{showPosts()}</div>
        </section>
    );
};

export default PostPage;
