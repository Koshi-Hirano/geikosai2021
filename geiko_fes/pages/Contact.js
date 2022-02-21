import Head from 'next/head';
import MediaQuery from "react-responsive";
import ContactPC from "./production/PC/ContactPC";
import ContactPhone from "./production/Phone/ContactPhone";

export default function Contact(){
    return <div>
        <Head>
            <title>お問い合わせ</title>
            <link rel="icon" href="./production/logo_touka.png" />
        </Head>
        <MediaQuery query="(max-width: 767px)">
            <ContactPhone />            
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
            <ContactPC />
        </MediaQuery>
    </div>
}