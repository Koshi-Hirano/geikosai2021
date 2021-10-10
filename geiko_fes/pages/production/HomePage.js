import Head from 'next/head'
import MediaQuery from 'react-responsive'
import HomePhone from './Phone/HomePhone'
import HomePC from './PC/HomePC'

export default function Production(){
    return <dev>
        <Head>
            <title>第18回芸工祭</title>
            <link rel="icon" href="./logo_touka.png" />
        </Head>
        <dev>
            <MediaQuery query="(max-width: 767px)">
                <HomePhone />
            </MediaQuery>
            <MediaQuery query="(min-width: 768px)">
                <HomePC />
            </MediaQuery>
        </dev>
    </dev>
}