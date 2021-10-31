import styled from "styled-components";
import Header from "./components/Header";
import YouTube from "react-youtube";

const Frame = styled.div`
    display: flex;
`
const Container = styled.div`
    width: 82vw;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    font-family: 游ゴシック;
`
const Phrase = styled.p`
    text-align: left;
    font-family: 游ゴシック;
    font-size: 1.3vw;
`

const DateFrame = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20vh;
`
const Word = styled.p`
    margin-right: 10vw;
    font-family: 游ゴシック;
    font-size: 3vw;
`
const Date = styled.p`
    font-family: Helvetia;
    font-size: 3vw;
`

const YoutubeFrame = styled.div`
    margin-top: 10vh;
    margin-bottom: 10vh;
`
const YouTubePhrase = styled.p`

`

const Review = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
`
const ReviewTitle = styled.p`
    margin-bottom: 0.5vh;
    font-size: 2vw;
`
const ReviewPhrase = styled.p`

`
const ReviewButton = styled.img`
    margin-bottom: 10vh;
`
export default function CBAPC(){
    return <Frame>
        <Header />
        <Container>
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
                <Date>11.7(Sun) 19:30~</Date>
            </DateFrame>
            <YoutubeFrame>
                <YouTubePhrase>YouTube Liveにて配信します。時間になりましたら以下からご覧いただけます。</YouTubePhrase>
                <YouTube videoId="YAupb41Ukfs" />
            </YoutubeFrame>
            <Review>
                <ReviewTitle>アンケート</ReviewTitle>
                <ReviewPhrase>公開後アンケートにご協力ください。</ReviewPhrase>
            </Review>
            <ReviewButton src="./production/" />
        </Container>
    </Frame>
}