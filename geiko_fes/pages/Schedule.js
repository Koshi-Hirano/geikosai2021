import Head from "next/dist/shared/lib/head";
import MediaQuery from "react-responsive";
import SchedulePC from "./production/PC/SchedulePC";
import SchedulePhone from "./production/Phone/SchedulePhone";

export default function Schedule(){
    return <div>
        <Head>
            <title>第18回芸工祭</title>
            <link rel="icon" href="./production/logo_touka.png" />
        </Head>
        <MediaQuery query="(max-width: 767px)">
            <SchedulePhone />            
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
            <SchedulePC />
        </MediaQuery>
    </div>
}