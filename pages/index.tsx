
import { Inter } from 'next/font/google'

import Link from "next/link";



export default function Home({data }:any) {

  return (
    <div>{data?.map(item => {
      return <div key={item.id}>
        {/*as={`/post/${item.id}`}*/}
        <Link href={`/post/${item.id}`} >link {item.id}</Link>
        {item.name}</div>
    })}</div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()


  return { props: { data } as any } as any
}