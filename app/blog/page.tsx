
import Posts from "@/components/Posts";
import Search from "@/components/Search";


const Blog = () => {
  return (
    <div>
      <h1 className="text-2xl text-center">Блог</h1>
      <Search />
      <Posts />
    </div>
  )
}

export default Blog