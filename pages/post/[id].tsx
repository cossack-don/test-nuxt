const id = ({post}:any) => {

    return (<div>SSR ID - {post.id} {post.name}</div>)
}

export default id

// export async function getStaticProps({ params }) {
//     // params contains the post `id`.
//     // If the route is like /posts/1, then params.id is 1
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
//     const post = await res.json()
//
//     // Pass post data to the page via props
//     return { props: { post } }
// }

// export async function getStaticPaths() {
//
//     const res = await fetch('https://jsonplaceholder.typicode.com/users/')
//     const posts = await res.json()
//
//     // Get the paths we want to pre-render based on posts
//     const paths = posts.map((post) => ({
//         params: { id: post.id.toString() },
//     }))
//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
//
// }

export async function getServerSideProps({ params }:any) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const post = await res.json()

    // Pass post data to the page via props
    return { props: { post } as any } as any
}