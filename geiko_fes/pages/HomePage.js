import Head from 'next/head'
import MediaQuery from 'react-responsive'
import HomePhone from './production/Phone/HomePhone'
import HomePC from './production/PC/HomePC'

export default function HomePage(){
    return <div>
        <Head>
            <title>第18回芸工祭</title>
            <link rel="icon" href="./production/logo_touka.png" />
        </Head>
        <MediaQuery query="(max-width: 767px)">
            <HomePhone />            
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
            <HomePC />
        </MediaQuery>
    </div>
}