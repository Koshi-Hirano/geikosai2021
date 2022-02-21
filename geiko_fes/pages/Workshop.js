import Head from "next/dist/shared/lib/head";
import MediaQuery from "react-responsive";
import WorkshopPC from "./production/PC/WorkshopPC";
import WorkshopPhone from "./production/Phone/WorkshopPhone";

export default function Goken(){
    return <div>
        <Head>
            <title>5研企画</title>
            <link rel="icon" href="./production/5ken.png" />
        </Head>
        <MediaQuery query="(max-width: 767px)">
            <WorkshopPhone />            
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
            <WorkshopPC />
        </MediaQuery>
    </div>
}