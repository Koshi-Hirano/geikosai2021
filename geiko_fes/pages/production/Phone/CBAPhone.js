import styled from "styled-components";
import YouTube from "react-youtube";
import Link from "next/link"

const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'ヒラギノ明朝 ProN','Hiragino Mincho ProN','ＭＳ 明朝', 'MS Mincho',serif;
`
const LogoImage = styled.img`
    width: 60%;
    margin-top: 15vh;
    margin-bottom: 15vh;
`
const VisualImage = styled.img`
    width: 90%;
    border-radius: 2%;
    margin-bottom: 15vh;
`

const Sub = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 7vh;
`
const Toha = styled.p`
    font-size: 6vw;
    font-weight: 600;
    margin-left: 3%;
`
const SubImage = styled.img`
    width: 30%;
`
const SubPhrase = styled.p`
    text-align: left;
    font-size: 4.3vw;
    font-weight: 500;
    margin-bottom: 10vh;
    margin-left: 7%;
    margin-right: 7%;
    letter-spacing: 0.15em;
    line-height: 1.5;
`

const Word = styled.p`
    font-size: 7vw;
    margin-bottom: 0vh;
`
const Date = styled.p`
    font-size: 7vw;
`
const YouTubePhrase = styled.p`
    font-size: 4.5vw;
    font-weight: 500;
`

const ReviewTitle = styled.p`
    margin-bottom: 0.5vh;
    margin-top: 10vh;
    font-size: 7vw;
    font-weight: 600;
`
const ReviewPhrase = styled.p`
    font-size: 4.5vw;
    font-weight: 500;
`
const ReviewButton = styled.img`
    width: 60%;
    margin-bottom: 10vh;
    margin-top: 8vh
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
    width: 40%;
    margin-top: 5vh;
    margin-bottom: 5vh;
    margin-left: 3vw;
    margin-right: 3vw;
`
export default function CBAPhone(){
    const opts = {
        height: '200',
        width: '300',
    }
    return <Frame>
        <LogoImage src="./production/cbalogo.png" />
        <VisualImage src="./production/cba21_mainvis_HDR_2.png" />
        <Sub>
            <SubImage src="./production/cbalogo.png"/>
            <Toha>とは…</Toha>
        </Sub>
        <SubPhrase>
            CBAprojectは芸工祭2日目にファッションショーを行う、
            芸工祭企画のひとつです。既存のファッションショーとは
            異なる、映像・照明・音効・舞台などの要素が織りなす
            ショーをぜひご覧ください。
        </SubPhrase>
        <Word>開催時間</Word>
        <Date>11.7(Sun) 19:30～</Date>
        <YouTubePhrase>
            YouTube Liveにて配信します。<br/>
            時間になりましたら以下からご覧いただけます。
        </YouTubePhrase>
        <YouTube videoId="YAupb41Ukfs" opts={opts}/> 
        <ReviewTitle>アンケート</ReviewTitle>
        <ReviewPhrase>公開後アンケートにご協力ください。</ReviewPhrase>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfPKYxUUHb9kdFx51PBlLWEKGiN9g-0Xq9GA0DFhVUkDsaQCg/viewform?usp=sf_link"><ReviewButton src="./production/cba_anke.png" /></Link>   
        <Footer />
        <Line />
        <Footer>
            <Link href="/HomePage"><Button src="./production/cba_top.png" /></Link>
            <Link href="/Gakusai"><Button src="./production/cba_gakusai.png" /></Link>
        </Footer>
    </Frame>
}