import type {Metadata} from "next";


type Props={
  params:{
      id:any;
  }
}




// export async function generateMetadata({params:{id}}:Props):Promise<Metadata> {
//     const post = await getPost(id);
//
//     return{
//         title: `Пост: ${post.title}`,
//     }
// }



async function getPost(id: any) {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60,
        }
    });
    return post.json();
}

const Post = async ({params:{id}} : Props) => {

    const post = await getPost(id);

    return(
        <>
            <div className="rounded-[10px] bg-amber-100 p-2">
                <h1 className="mb-1 text-xl text-center">{post.title}</h1>
                <p>{post.body}</p>
            </div>

        </>
    )
}

export default Post