import { getPosts, getPostsBySearch } from "@/services/getPost";
import { create } from "zustand";

// import { createStore } from 'zustand/vanilla'


export const usePosts = create((set) => ({
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

