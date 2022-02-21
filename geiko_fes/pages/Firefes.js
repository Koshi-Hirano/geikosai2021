import Head from 'next/head'
import MediaQuery from 'react-responsive'
import FirefesPhone from './production/Phone/FirefesPhone'
import FirefesPC from './production/PC/FirefesPC'

export default function HomePage(){
    return <div>
        <Head>
            <title>火祭</title>
            <link rel="icon" href="./production/logo_touka.png" />
        </Head>
        <MediaQuery query="(max-width: 767px)">
            <FirefesPhone />            
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
            <FirefesPC />
        </MediaQuery>
    </div>
}