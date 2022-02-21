import Head from 'next/head';
import MediaQuery from "react-responsive";
import AboutPC from "./production/PC/AboutPC";
import AboutPhone from "./production/Phone/AboutPhone";

export default function About(){
    return <div>
        <Head>
            <title>What is Geiko-fes?</title>
            <link rel="icon" href="./production/logo_touka.png" />
        </Head>
        <MediaQuery query="(max-width: 767px)">
            <AboutPhone />            
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
            <AboutPC />
        </MediaQuery>
    </div>
}