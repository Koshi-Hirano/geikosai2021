import styled from "styled-components";
import YouTube from "react-youtube";
import Link from "next/link";

const Frame = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'ヒラギノ明朝 ProN','Hiragino Mincho ProN','ＭＳ 明朝', 'MS Mincho',serif;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20vh;
`
const LogoImage = styled.img`
    width: 20%;
    margin-right: 7%;
    margin-left: 5%;
`
const VisualImage = styled.img`
    width: 55%;
    border-radius: 2%;
`

const Sub = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20vh;
`
const SubLogoImage = styled.img`
    width: 13%;
    margin-right: 2%;
    margin-left: 5%;
`
const Toha = styled.p`
    font-size: 2vw;
    margin-right: 7%;
`
const Phrase = styled.p`
    text-align: left;
    font-size: 1.8vw;
    font-weight: 550;
    letter-spacing: 0.1em;
    line-height: 1.7;
`

const DateFrame = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20vh;
`
const Word = styled.p`
    margin-right: 10vw;
    font-size: 4vw;
    font-weight: 550;
`
const Date = styled.p`
    font-size: 4vw;
`

const YoutubeFrame = styled.div`
    margin-top: 10vh;
    margin-bottom: 10vh;
`
const YouTubePhrase = styled.p`
    font-size: 2vw;
    font-weight: 550;
    margin-bottom: 5vh;
`

const Review = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 60%;
`
const ReviewTitle = styled.p`
    margin-bottom: 0.5vh;
    font-size: 3.5vw;
    font-weight: 500;
`
const ReviewPhrase = styled.p`
    font-size: 2vw;
    margin-left: 3%;
`
const ReviewButton = styled.img`
    width: 30%;    
    margin-bottom: 20vh;
    margin-top: 10vh;
    
`
const Line = styled.hr`
    width: 80%;
`
const Footer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Button = styled.img`
    width: 30%;
    margin-top: 10vh;
    margin-bottom: 10vh;
    margin-left: 5vw;
    margin-right: 5vw;
`
export default function CBAPC(){
    return <Frame>
        <Top>
            <LogoImage src="./production/cbalogo.png"/>
            <VisualImage src="./production/cba21_mainvis_HDR_2.png"/>
        </Top>
        <Sub>
            <SubLogoImage src="./production/cbalogo.png"/>
            <Toha>とは…</Toha>
            <Phrase>
                CBAprojectは芸工祭2日目にファッションショーを行う、<br />
                芸工祭企画のひとつです。既存のファッションショーとは<br />
                異なる、映像・照明・音効・舞台などの要素が織りなす<br />
                ショーをぜひご覧ください。
            </Phrase>
        </Sub>
        <DateFrame>
            <Word>開催時間</Word>
            <Date>11.7(Sun) 19:30～</Date>
        </DateFrame>
        <YoutubeFrame>
            <YouTubePhrase>YouTube Liveにて配信します。時間になりましたら以下からご覧いただけます。</YouTubePhrase>
            <YouTube videoId="YAupb41Ukfs" />
        </YoutubeFrame>
        <Review>
            <ReviewTitle>アンケート</ReviewTitle>
            <ReviewPhrase>公演後アンケートにご協力ください。</ReviewPhrase>
        </Review>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfPKYxUUHb9kdFx51PBlLWEKGiN9g-0Xq9GA0DFhVUkDsaQCg/viewform?usp=sf_link"><ReviewButton src="./production/cba_anke.png" /></Link>
        <Line />
        <Footer>
            <Link href="/HomePage"><Button src="./production/cba_top.png" /></Link>
            <Link href="/Gakusai"><Button src="./production/cba_gakusai.png" /></Link>
        </Footer>
    </Frame>
}