
export type paramsType = Promise<{ id: string }>;
type Props = {
    params: paramsType;
};


// export async function generateStaticParams() {
//     const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
//     return posts.map(({post}:{id:string|number}) => ({
//         id: post.id.toString(),
//     }))
// }

async function getPost(id:string) {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return post.json();
}

const Post = async ({ params }: Props) => {
    const { id } = await params;
    const post = await getPost(id);

    return (
        <>
            <div className="rounded-[10px] bg-amber-100 p-2">
                <h1 className="mb-1 text-xl text-center">{post.title}</h1>
                <p>{post.body}</p>
            </div>

        </>
    )
}

export default Post