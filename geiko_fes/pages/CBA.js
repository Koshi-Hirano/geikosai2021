import Head from 'next/head'
import MediaQuery from 'react-responsive'
import CBAPhone from './production/Phone/CBAPhone'
import CBAPC from './production/PC/CBAPC'

export default function CBA(){
    return <div>
        <Head>
            <title>CBA</title>
            <link rel="icon" href="./production/cbalogo.png" />
        </Head>
        <MediaQuery query="(max-width: 767px)">
            <CBAPhone />            
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
            <CBAPC />
        </MediaQuery>
    </div>
}