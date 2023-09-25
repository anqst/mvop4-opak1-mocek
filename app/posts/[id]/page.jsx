import Layout from "@/app/layout";
import functions from '../../functions'

export default async function Post({ params }) {

    let post = await functions.fetchDataFromURL(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    return <Layout>{post.userId == 10 ?
        <>
            <h1 className="text-xl font-bold">This post is not public.</h1>
        </> :
        <>
            <h1 className="text-xl font-bold">{post.id} : {post.title}</h1>
            <div className="flex flex-col gap-4">
                <h2 className="text-lg">by user: {post.userId}</h2>
                <p>
                    {post.body}
                </p>
            </div>
        </>}

    </Layout>;
}