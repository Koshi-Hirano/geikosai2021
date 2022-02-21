import Header from './components/Header'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import Link from 'next/link'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import YouTube from "react-youtube";

const Frame = styled.div`
    display: flex;
`
const Container = styled.div`
    width: 82vw;
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
`

const Top = styled.div`
    width: 100%;
    height: 80vh;
    margin-top: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const AppearPhrase = keyframes`
    from { 
        opacity: 0;
        margin-left: 0;
    }
    to { 
        opacity: 1;
        margin-left: 5%;
    }
`
const ImagePhraseFrame = styled.div`
    width: 30%;
    display: flex;
`
const ImagePhrase = styled.img`
    width: 90%;
    margin-left: 0;
    height: auto;
    opacity: 0;
    animation-name: ${AppearPhrase};
    animation-duration: 2s;
    animation-delay: 2s; 
    animation-fill-mode: forwards;
`
const AppearLogo = keyframes`
    from { 
        opacity: 0;
    }
    to { 
        opacity: 1;
    }
`
const ImageTop = styled.img`
    width: 30%;
    height: auto;
    margin-left: 0;
    margin-right: 3%;
    opacity: 0;
    animation-name: ${AppearLogo};
    animation-duration: 2s;
    animation-delay: 1s; 
    animation-fill-mode: forwards;
`
const AppearDate = keyframes`
    from { 
        opacity: 0;
        margin-left: 0%;
    }
    to { 
        opacity: 1;
        margin-left: 5%;
    }
`
const ImageDateFrame = styled.div`
    width: 30%;
    display: flex;
    margin-left: 0;
`
const ImageDate = styled.img`
    width: 80%;
    height: auto;
    opacity: 0;
    animation-name: ${AppearDate};
    animation-duration: 2s;
    animation-delay: 2s; 
    animation-fill-mode: forwards;
`

const News = styled.div`
    width: 60%;
    height: 81vh; 
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #6edefa;
`

const About = styled.div`

`
const AboutImage = styled.img`
    width: 70%;
`

const Contents = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
`
const GakusaiKikaku = styled.div`
    margin-left: 3%;
    margin-right: 3%;
    margin-bottom: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const GakusaiFrame = styled.div`
    height: 7vh;
`
const GakusaiTitle = styled.p`
    color: #633701;
    margin: 0;
    font-size: 2vw;
    font-weight: bold;
    transition: 0.5s;
    &:hover {
        font-size: 2.5vw;
        transform: rotate(5deg);
    }
`
const GakusaiPhrase = styled.p`
    text-align: left;
    font-size: 1.5vw;
    font-weight: 500;
`
const Logo = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: space-around;
    margin-top: 8%;
`
const LogoFrame = styled.div`
    width: 13vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LogoImage = styled.img`
    width: 80%;
    transition: 0.5s;
    &:hover {
        width: 100%;
    }
`
const LogoImageHidden = styled.img`
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
    opacity: 0.3;
`
const Other = styled.div`
    display: flex;
    justify-content: center;
`
const Kikaku = styled.div`
    width: 47%;
    margin: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const KikakuFrame = styled.div`
    height: 7vh;
`
const KikakuTitle = styled.p`
    color: #633701;
    margin: 0;
    font-size: 2vw;
    font-weight: bold;
    transition: 0.5s;
    &:hover {
        font-size: 2.5vw;
        transform: rotate(5deg);
    }
`
const KikakuPhrase = styled.p`
    text-align: left;
    font-size: 1.5vw;
    font-weight: 500;
    margin-top: 0;
`

const Info = styled.div`
    margin-top: 10vh;
`
const Prepare = styled.p`
    font-size: 2vw;
    font-weight: 600;
`
const Back = styled.img`
    width 10%;
    margin-top: 30vh;
    margin-bottom: 10vh;
`

const Sub = styled.div`
    margin-top: 15vh;
    margin-bottom: 10vh;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    display: flex;
    align-items: center;
`
const SubImage = styled.img`
    height: 8vh;
    transition: 1s;
    &:hover{
        transform: rotateX( 360deg );
    }
`
const PanfImage = styled.img`
    width: 20%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
`
const FormButtom = styled.p`
    border: 5px solid #432c02;
    width: 35%;
    margin-top: 10vh;
    margin-left: auto;
    margin-right: auto;
    font-size: 2.5vw;
    font-weight: bold;
    color: #432c02; 
    padding-top: 3%;
    padding-bottom: 3%;
    transition: 0.5s;
    &:hover {
        background-color: #432c02;
        color: white;
    }
`
const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
};

export default function HomePC(){
    const TwitterDesign = {
        width: '100%',
        height: '80vh'
    }

    return <Frame>
        <Header />
        <Container>
            <Top>
                <ImagePhraseFrame><ImagePhrase src="./production/18th-.png" /></ImagePhraseFrame>
                <ImageTop src="./production/logo_touka.png" />
                <ImageDateFrame><ImageDate src="./production/date.png" /></ImageDateFrame>
            </Top>
            <Sub><SubImage src="./production/news.png"/></Sub>
            <News>
                <TwitterTimelineEmbed sourceType="profile" screenName="QU_GEIKOfes_18" options={TwitterDesign}/>
            </News>
            <Sub><SubImage src="./production/whatis.png"/></Sub>
            <About>
                <AboutImage src="./production/ku-sui_photo.png" />
            </About>
            <Sub><SubImage src="./production/content.png" /></Sub>
            <Contents>
                <GakusaiKikaku>
                    <Link href="/Gakusai"><GakusaiFrame><GakusaiTitle>学祭企画</GakusaiTitle></GakusaiFrame></Link>
                    <GakusaiPhrase>芸工祭では、様々な企画がイベントを開催します。舞台、音響、衣装、照明など全てを学生が一から作り上げ、芸工祭を彩ります。</GakusaiPhrase>
                    <Logo>
                        <Link href="/Zenya"><LogoFrame><LogoImage src="./production/zenya.png"/></LogoFrame></Link>
                        <Link href="http://project-of-2ken.com/21withyou/"><LogoFrame ><LogoImage src="./production/2ken.png"/></LogoFrame></Link>
                        <Link href="/CBA"><LogoFrame><LogoImage src="./production/cbalogo.png"/></LogoFrame></Link>
                        <Link href="https://3kenfunsui.github.io/2021/"><LogoFrame><LogoImage src="./production/3ken.png"/></LogoFrame></Link>
                    </Logo>
                    <Logo>
                        <Link href="/Firefes"><LogoFrame><LogoImage src="./production/firefes.png"/></LogoFrame></Link>
                        <Link href="/Panf"><LogoFrame><LogoImage src="./production/Panf.png"/></LogoFrame></Link>
                        <Link href="/Workshop"><LogoFrame><LogoImage src="./production/5ken.png"/></LogoFrame></Link>
                        <Link href="/Nullken"><LogoFrame><LogoImage src="./production/nullkenlogo.png"/></LogoFrame></Link>
                    </Logo>
                </GakusaiKikaku>
                <Other>
                    <Kikaku>
                        <Link href="/Workshop"><KikakuFrame><KikakuTitle>5研企画</KikakuTitle></KikakuFrame></Link>
                        <KikakuPhrase>5研企画は、芸工祭実行委員会である5研が運営する企画です。今年度はワークショップを実施します。</KikakuPhrase>
                    </Kikaku>
                    <Kikaku>
                        <Link href="/ippan-kikaku"><KikakuFrame><KikakuTitle>一般企画</KikakuTitle></KikakuFrame></Link>
                        <KikakuPhrase>一般企画は、教室などで学部内外からの公募により実施されます。</KikakuPhrase>
                    </Kikaku>
                </Other>
            </Contents>
            <Sub><SubImage src="./production/info.png"/></Sub>
            <Info>
                <YouTube videoId="AdEcqR0XZWk" /> 
                <Link href="/Panf"><PanfImage src="./production/panf_button.png" /></Link>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeU7JA71AgD5XiEHCdIuxYNr05rwvpCj1LheN8TSms4iGxEnw/viewform?usp=sf_link"><FormButtom>対面参加応募フォーム</FormButtom></Link>
            </Info>
            <Back src="./production/tothetop.png" onClick={returnTop} />
        </Container>
    </Frame>
}