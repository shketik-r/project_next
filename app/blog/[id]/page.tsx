import type {Metadata} from "next";

type Params = Promise<{ id: string }>

export async function generateMetadata(PageProps: { params: Params }):Promise<Metadata> {
    const { id } = await PageProps.params
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

const Post = async (PageProps: { params: Params }) => {
    const { id } = await PageProps.params
    const post = await getPost(id);

    return(
        <>
            <div className="rounded-[10px] bg-amber-100 p-2">
                <h1 className="mb-1 text-xl text-center">{post.title}1</h1>
                <p>{post.body}</p>
            </div>

        </>
    )
}

export default Post