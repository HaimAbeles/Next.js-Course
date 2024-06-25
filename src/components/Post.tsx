'use client';

import { Post } from "@/types/Post";

interface IPostComponentProps {
    posts: Post[] | undefined;
}

export default function PostComponent({
    posts,
}: IPostComponentProps) {

    return <>
    {posts?.map((post: Post, index: number) => <div key={index}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>)}
    </>
}