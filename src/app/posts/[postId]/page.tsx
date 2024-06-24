// localhost:3000/posts/{postId}

import Link from "next/link";


export function generateMetadata(props: IPostPageProps) {
    return {
        title: `Post ${props.params.postId}`,
        description: `Post description ${props.params.postId}`
    }
}

interface IPostPageProps {
    params: {
        postId: string;
    }
}

export default function PostPage({
    params
}: IPostPageProps) {
    return <>
        <div className="new-post">
            <Link className="button" href={`/posts/${params.postId}/edit`}>Edit Post</Link>
        </div>
        <div>Post {params.postId} Page!</div>
    </>
}