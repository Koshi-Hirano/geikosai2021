import Head from "next/dist/shared/lib/head";
import MediaQuery from "react-responsive";
import GakusaiPC from "./production/PC/GakusaiPC";
import GakusaiPhone from "./production/Phone/GakusaiPhone";

export default function Gakusai(){
    return <div>
        <Head>
            <title>第18回芸工祭</title>
            <link rel="icon" href="./production/logo_touka.png" />
        </Head>
        <MediaQuery query="(max-width: 767px)">
            <GakusaiPhone />            
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
            <GakusaiPC />
        </MediaQuery>
    </div>
}