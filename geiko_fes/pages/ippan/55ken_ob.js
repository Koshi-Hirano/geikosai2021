import Head from 'next/head'
import MediaQuery from 'react-responsive'
import ObPhone from '../production/Phone/5ken_obPhone'
import ObPC from '../production/PC/5ken_obPC'

export default function HomePage(){
    return <div>
        <Head>
            <title>5研OB</title>
            <link rel="icon" href="./production/logo_touka.png" />
        </Head>
        <MediaQuery query="(max-width: 767px)">
            <ObPhone />            
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
            <ObPC />
        </MediaQuery>
    </div>
}