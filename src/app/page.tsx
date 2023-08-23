import Link from "next/link";

const HomePage = () => {
    return (
        <section className="flex flex-col gap-8 sm:gap-16">
            <div className="w-full flex justify-center">
                <h1 className="text-xl sm:text-3xl text-white font-bold tracking-wide">
                    Firebase SDK | Realtime Database
                </h1>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="text-sm sm:text-xl text-white font-medium tracking-wide">
                    Basic Crud Using Realtime Database
                </h3>
                <ul className="text-gray-200 list-disc text-xs">
                    <li>Read</li>
                    <li>Create</li>
                    <li>Delete</li>
                </ul>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="text-sm sm:text-xl text-white font-medium tracking-wide">
                    Example
                </h3>
                <ul className="text-gray-200 list-disc text-xs">
                    <li>
                        <Link href="/post">/post</Link>
                    </li>
                    <li>
                        <Link href="/post/create">/post/create</Link>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default HomePage;
