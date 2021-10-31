import Head from "next/dist/shared/lib/head";
import MediaQuery from "react-responsive";
import WorkshopPC from "./production/PC/WorkshopPC";
import WorkshopPhone from "./production/Phone/WorkshopPhone";

export default function Workshop(){
    return <div>
        <Head>
            <title>第18回芸工祭</title>
            <link rel="icon" href="./production/logo_touka.png" />
        </Head>
        <MediaQuery query="(max-width: 767px)">
            <WorkshopPhone />            
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
            <WorkshopPC />
        </MediaQuery>
    </div>
}