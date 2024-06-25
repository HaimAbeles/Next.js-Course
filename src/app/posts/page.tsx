// localhost://3000/posts

import PostComponent from "@/components/Post";
import { Post } from "@/types/Post";
import Link from "next/link";

const getPosts = async () => {
    const res: Response = await fetch('http://localhost:3000/api/posts', {
        cache: 'no-cache'
    });
    return await res.json();
}

export default async function PostsPage() {
    const posts: Post[] = await getPosts();

    return <>
        <div className="new-post">
            <Link className="button" href='/posts/new'>New Post</Link>
        </div>
        <div className="posts-root">Posts Page!</div>
        <PostComponent posts={posts} />
    </>
}