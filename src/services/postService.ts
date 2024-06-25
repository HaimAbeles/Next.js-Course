'use server';

export const getPostById = async (postId: string) => {
    const res = await fetch(`https://dummyjson.com/posts/${postId}`, {
        method: 'GET',
        cache: 'no-cache'
    });
    const post = await res.json();
    return post;
}

//server actions
