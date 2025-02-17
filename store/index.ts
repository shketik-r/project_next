import { getPosts, getPostsBySearch } from "@/services/getPost";
import { create } from "zustand";

// import { createStore } from 'zustand/vanilla'



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


export const usePosts = create<PostsState>((set) => ({
  posts: [],
  loading: false,

  getAllPosts: async () => {
    set({ loading: true })
    const posts = await getPosts()
    set({ posts, loading: false })
  },

  getPostsBySearch: async (search: string)=>{
    set({ loading: true })
    const posts = await getPostsBySearch(search)
    set({ posts, loading: false })
  }

}));

