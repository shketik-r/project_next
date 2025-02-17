'use client'
import { FormEventHandler, useState } from "react";
import { usePosts } from "@/store/"

const Search = () => {


  // types.ts
  interface Post {
    id: number;
    title: string;
    content: string;
    // добавьте другие поля, которые есть у вашего поста
  }


  interface PostsState {
    posts: Post[];
    loading: boolean;
    getAllPosts: () => Promise<void>;
    getPostsBySearch: (search: string) => Promise<void>;
  }



  const [search, setSearch] = useState('');
  const getPostsBySearch = usePosts((state: PostsState) => state.getPostsBySearch)




  const handelSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    await getPostsBySearch(search);
  }

  return (
    <>
      <form onSubmit={handelSubmit}>
        <input
          type="search"
          placeholder="поиск"
          value={search}
          onChange={(event) => setSearch(event?.target.value)}
          className="border border-gray-300 border-1 p-1 rounded-sm"
        />

        <button className="px-3 py-1 mx-1 bg-slate-500 text-white text-center hover:bg-slate-600" type="submit">искать</button>
      </form>
    </>
  )
}

export default Search