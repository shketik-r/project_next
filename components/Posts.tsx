'use client'

import { usePosts } from "@/store/";
import Link from "next/link";
import LoadingPost from "@/app/blog/loading";
import { useEffect, useRef } from "react";
import { useShallow } from "zustand/shallow";




// types.ts
interface Post {
  id: number;
  title: string;
  content: string;
  // добавьте другие поля, которые есть у вашего поста
}


const Posts = () => {
  const [posts, loading, getAllPosts] = usePosts(useShallow(
    (state) => {
      return [state.posts, state.loading, state.getAllPosts];
    }
  ));


  const hasFetchedPosts = useRef(false);

  useEffect(() => {
    if (!hasFetchedPosts.current && !loading) {
      hasFetchedPosts.current = true;
      getAllPosts();
    }
  }, [loading, getAllPosts])


  return loading ? <LoadingPost /> : (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2 mt-2  ">
      {posts.map((post: Post) => {
        return (
          <Link
            className="border-gray-300 p-2 border-[1px] rounded-[10px] hover:border-gray-600"
            key={post.id}
            href={`/blog/${post.id}`}>
            <h2
              className="text-center text-sm line-clamp-2 leading-[1] font-bold">
              {`#${post.id}`} - {post.title}
            </h2>
          </Link>
        )

      })}
    </div>
  )
}

export default Posts;