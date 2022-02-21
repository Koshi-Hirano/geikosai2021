import Head from "next/dist/shared/lib/head";
import MediaQuery from "react-responsive";
import ZenyaPC from "./production/PC/ZenyaPC";
import ZenyaPhone from "./production/Phone/ZenyaPhone";

export default function FlyingPan(){
    return <div>
        <Head>
            <title>Zenya</title>
            <link rel="icon" href="./production/zenya.png" />
        </Head>
        <MediaQuery query="(max-width: 767px)">
            <ZenyaPhone />            
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
            <ZenyaPC />
        </MediaQuery>
    </div>
}