// localhost:3000/posts/{postIt}/edit

import PostForm from "@/components/PostForm/PostForm";

interface IEditPostPage {
    params: {
        postId: string;
    }
}

export default function EditPostPage({
    params
}: IEditPostPage) {
    return (
        <>
            <header className="mb-4">
                <h1>Edit Post {params.postId}</h1>
            </header>
            <PostForm />
        </>
    );}