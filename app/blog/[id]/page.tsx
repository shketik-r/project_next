import type {Metadata} from "next";


// type Props={
//   params:{
//       id:string;
//   }
// }



type Params = Promise<{ id: string }>



export async function generateMetadata(props: { params: Params }):Promise<Metadata> {
    const { id } = await props.params
    const post = await getPost(id);

    return{
        title: `Пост: ${post.title}`,
    }
}



async function getPost(id: string) {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60,
        }
    });
    return post.json();
}

const Post = async (props: { params: Params }) => {
    const { id } = await props.params
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