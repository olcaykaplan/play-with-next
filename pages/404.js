import { useEffect } from "react"
import { useRouter } from "next/router"
import Head from 'next/head'
function NotFound() {
    const router = useRouter();
    useEffect(() => {
       setTimeout(() => {
           router.push("/products")
       }, 3000);
    }, [])
    return (
        <>
        <Head>
            <title>Next | 404 Not Found</title>
        </Head>
        <div>
            <h1>Oops...</h1>
            <h2>That page is not found</h2>
        </div>
        </>
    )
}

export default NotFound
