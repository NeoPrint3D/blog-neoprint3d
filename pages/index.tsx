import { m } from 'framer-motion'
import Head from 'next/head'

export function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="A fully featured react template" />
                <meta property="og:url" content="https://neo-letter.web.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="React Template" />
                <meta property="og:description" content="A fully featured react template" />
                <meta property="og:image" content="/preview/home.png" />
            </Head>
            <div className='min-h-screen flex justify-center items-center'>
                <h1 className="text-center text-white text-5xl">
                    The React Template
                </h1>
            </div>
        </>
    )
}

export default Home
