// localhost://3000/posts

import Link from "next/link";

export default function PostsPage() {
    return <>
        <div className="new-post">
            <Link className="button" href='/posts/new'>New Post</Link>
        </div>
        <div className="posts-root">Posts Page!</div>
    </>
}