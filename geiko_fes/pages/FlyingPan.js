import Head from "next/dist/shared/lib/head";
import MediaQuery from "react-responsive";
import FlyingPanPC from "./production/PC/FlyingPanPC";
import FlyingPanPhone from "./production/Phone/FlyingPanPhone";

export default function FlyingPan(){
    return <div>
        <Head>
            <title>第18回芸工祭</title>
            <link rel="icon" href="./production/logo_touka.png" />
        </Head>
        <MediaQuery query="(max-width: 767px)">
            <FlyingPanPhone />            
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
            <FlyingPanPC />
        </MediaQuery>
    </div>
}