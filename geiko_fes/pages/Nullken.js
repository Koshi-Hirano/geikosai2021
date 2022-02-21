import Head from "next/dist/shared/lib/head"
import MediaQuery from "react-responsive"
import NullkenPC from "./production/PC/NullkenPC"
import NullkenPhone from "./production/Phone/NullkenPhone"

export default function Ippan(){
    return <div>
        <Head>
            <title>未定研</title>
            <link rel="icon" href="./production/nullkenlogo.png" />
        </Head>
        <MediaQuery query="(max-width: 767px)">
            <NullkenPhone />            
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
            <NullkenPC />
        </MediaQuery>
    </div>
}