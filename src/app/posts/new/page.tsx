// localhost:3000/posts/new

import PostForm from "@/components/PostForm/PostForm";

export default function NewPostPage() {
    return (
        <>
            <header className="mb-4">
                <h1>New Post</h1>
            </header>
            <PostForm />
        </>
    );
}