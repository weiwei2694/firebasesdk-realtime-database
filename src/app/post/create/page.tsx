import CreatePost from "@/components/forms/CreatePost";

const PostCreatePage = () => {
    return (
        <section className="flex flex-col gap-6">
            <h1 className="text-xl sm:text-3xl text-white">Create Post</h1>
            <CreatePost />
        </section>
    );
};

export default PostCreatePage;
