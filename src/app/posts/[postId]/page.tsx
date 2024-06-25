'use client';

import PostComponent from "@/components/Post";
import { getPostById } from "@/services/postService";
import { Post } from "@/types/Post";
// localhost:3000/posts/{postId}

import Link from "next/link";
import { useEffect, useState } from "react";


// export function generateMetadata(props: IPostPageProps) {
//     return {
//         title: `Post ${props.params.postId}`,
//         description: `Post description ${props.params.postId}`
//     }
// }

interface IPostPageProps {
    params: {
        postId: string;
    }
}

export default function PostPage({
    params
}: IPostPageProps) {

    const [post, setPost] = useState<Post>();

    useEffect(() => {
        getPostById(params.postId).then((post: Post) => {
            setPost(post);
        });
    }, []);

    return <>
        <div className="new-post">
            <Link className="button" href={`/posts/${params.postId}/edit`}>Edit Post</Link>
        </div>
        <div>Post {params.postId} Page!</div>
        {post && <PostComponent posts={[post]} />}
    </>
}