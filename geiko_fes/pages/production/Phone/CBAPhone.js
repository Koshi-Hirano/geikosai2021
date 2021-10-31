import styled from "styled-components";
import Header from "./components/Header";
import Footer from './components/Footer';
import YouTube from "react-youtube";

const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const LogoImage = styled.img`
    width: 50%;
    margin-top: 20vh;
    margin-bottom: 30vh;
`
const VisualImage = styled.img`
    width: 80%;
    border-radius: 2%;
    margin-bottom: 20vh;
`

const Sub = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 7vh;
`
const Toha = styled.p`
    font-size: 4vw;
    margin-left: 3%;
    font-family: 游ゴシック;
`
const SubImage = styled.img`
    width: 20%;
`
const SubPhrase = styled.p`
    text-align: left;
    font-family: 游ゴシック;
    font-size: 2.5vw;
    margin-bottom: 10vh;
`

const Word = styled.p`
    font-family: 游ゴシック;
    font-size: 5vw;
    margin-bottom: 0vh;
`
const Date = styled.p`
    font-family: Helvetia;
    font-size: 5vw;
`
const YouTubePhrase = styled.p`

`

const ReviewTitle = styled.p`
    margin-bottom: 0.5vh;
    margin-top: 10vh;
    font-size: 4vw;
`
const ReviewPhrase = styled.p`

`
const ReviewButton = styled.img`
    margin-bottom: 10vh;
`
export default function CBAPhone(){
    const opts = {
        height: '300',
        width: '500',
    }
    return <Frame>
        <Header />
            <LogoImage src="./production/cbalogo.png" />
            <VisualImage src="./production/cba21_mainvis_HDR_2.png" />
            <Sub>
                <SubImage src="./production/cbalogo.png"/>
                <Toha>とは…</Toha>
            </Sub>
            <SubPhrase>
                CBAprojectは芸工祭2日目にファッションショーを行う、<br />
                芸工祭企画のひとつです。既存のファッションショーとは<br />
                異なる、映像・照明・音効・舞台などの要素が織りなす<br />
                ショーをぜひご覧ください。
            </SubPhrase>
            <Word>開催時間</Word>
            <Date>11.7(Sun) 19:30~</Date>
            <YouTubePhrase>
                YouTube Liveにて配信します。<br/>
                時間になりましたら以下からご覧いただけます。
            </YouTubePhrase>
            <YouTube videoId="YAupb41Ukfs" opts={opts}/> 
            <ReviewTitle>アンケート</ReviewTitle>
            <ReviewPhrase>公開後アンケートにご協力ください。</ReviewPhrase>
            <ReviewButton src="./production/" />   
        <Footer />
    </Frame>
}