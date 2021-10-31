import Head from "next/dist/shared/lib/head"
import WelcomePC from "./production/PC/WelcomePC"
import WelcomePhone from "./production/Phone/WelcomePhone"
import MediaQuery from "react-responsive"

export default function WelcomePage(){
    return <div>
        <Head>
            <title>第18回芸工祭</title>
            <link rel="icon" href="./production/logo_touka.png" />
        </Head>
        <MediaQuery query="(max-width: 767px)">
            <WelcomePhone />            
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
            <WelcomePC />
        </MediaQuery>
    </div>
} 