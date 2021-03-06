import Head from "next/dist/shared/lib/head"
import MediaQuery from "react-responsive"
import IppanPC from "./production/PC/IppanPC"
import IppanPhone from "./production/Phone/IppanPhone"

export default function Ippan(){
    return <div>
        <Head>
            <title>一般企画</title>
            <link rel="icon" href="./production/logo_touka.png" />
        </Head>
        <MediaQuery query="(max-width: 767px)">
            <IppanPhone />            
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
            <IppanPC />
        </MediaQuery>
    </div>
}