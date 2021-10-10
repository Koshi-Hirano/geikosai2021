import Header from "./components_prepare/Header"
import Content from "./components_prepare/Content"
import Footer from "./components_prepare/Footer"
import Head from 'next/head'

export default function Prepare(){
    return <div>
        <Head>
            <title>第18回芸工祭</title>
            <link rel="icon" href="./prepare/favicon.ico" />
        </Head>
        <Header />
        <Content />
        <Footer />
    </div>
}