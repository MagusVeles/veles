import Head from 'next/head'

export default function Layout({ children }) {

return (
    <>
        <Head>
            <title>Veles</title>
            <meta name="description" content="Veles's personal website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {children}
    </>
    )
}