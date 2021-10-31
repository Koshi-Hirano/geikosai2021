import Head from "next/dist/shared/lib/head";
import MediaQuery from "react-responsive";
import GokenPC from "./production/PC/GokenPC";
import GokenPhone from "./production/Phone/GokenPhone";

export default function Goken(){
    return <div>
        <Head>
            <title>第18回芸工祭</title>
            <link rel="icon" href="./production/logo_touka.png" />
        </Head>
        <MediaQuery query="(max-width: 767px)">
            <GokenPhone />            
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
            <GokenPC />
        </MediaQuery>
    </div>
}