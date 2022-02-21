import Header from './components/Header'
import Footer from './components/Footer'
import styled, { keyframes} from 'styled-components'
import Link from 'next/dist/client/link'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import YouTube from "react-youtube";

const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
`
const Top = styled.div`
    width: 80%;
    height: auto;
    margin-top: 5vh;
    display: flex;
`
const SubTop = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
const AppearLogo = keyframes`
    from { 
        opacity: 0;
    }
    to { 
        opacity: 1;
    }
`
const TopImage = styled.img`
    width: 36vw;
    opacity: 0;
    animation-name: ${AppearLogo};
    animation-duration: 2s;
    animation-delay: 1s; 
    animation-fill-mode: forwards;
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
const ImagePhrase = styled.img`
    width: 90%;
    height: auto;
    margin-top: 10%;
    margin-bottom: 10%;
    opacity: 0;
    animation-name: ${AppearPhrase};
    animation-duration: 2s;
    animation-delay: 2s; 
    animation-fill-mode: forwards;
`
const AppearDate = keyframes`
    from { 
        opacity: 0;
        margin-left: 0;
    }
    to { 
        opacity: 1;
        margin-left: 12%;
    }
`
const ImageDate = styled.img`
    width: 70%;
    height: auto;
    opacity: 0;
    animation-name: ${AppearDate};
    animation-duration: 2s;
    animation-delay: 2s; 
    animation-fill-mode: forwards;
`

const News = styled.div`
    width: 60%;
    height: 71vh; 
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
const Kikaku = styled.div`
    margin-left: 3%;
    margin-right: 3%;
    margin-bottom: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const KikakuFrame = styled.div`
    height: 7vh;
`
const KikakuTitle = styled.p`
    color: #633701;
    font-size: 5vw;
    font-weight: bold;
    transition: 0.5s;
    &:hover {
        font-size: 5.5vw;
        transform: rotate(5deg);
    }
`
const KikakuPhrase = styled.p`
    text-align: left;
    font-size: 3.7vw;
    font-weight: 530;
    width: 100%;
`
const Logo = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-around;
    margin-top: 5%;
`
const LogoFrame = styled.div`
    width: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: 
`
const LogoImage = styled.img`
    width: 70%;
    transition: 0.5s;
    &:hover {
        width: 90%;
    }
`
const LogoImageHidden = styled.img`
    width: 70%;
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
    opacity: 0.3;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5vh;
`
const Prepare = styled.p`
    font-size: 4vw;
    font-weight: 600;
`

const Sub = styled.div`
    margin-top: 10vh;
    margin-bottom: 5vh;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    display: flex;
`
const SubImage = styled.img`
    height: 5vh;
    transition: 1s;
    &:hover{
        transform: rotateX( 360deg );
    }
`
const PanfImage = styled.img`
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
`
const FormButtom = styled.p`
    border: 5px solid #432c02;
    width: 60%;
    margin-top: 10vh;
    margin-left: auto;
    margin-right: auto;
    font-size: 5vw;
    font-weight: bold;
    color: #432c02; 
    padding-top: 5%;
    padding-bottom: 5%;
    transition: 0.5s;
    &:hover {
        background-color: #432c02;
        color: white;
    }
`

const Back = styled.img`
    width 20%;
    margin-top: 10vh;
    margin-bottom: 5vh;
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
        height: '70vh',
    }
    const opts = {
        height: '200',
        width: '300',
    }
    return <Frame>
        <Header />
        <Top>
            <TopImage src="./production/logo_touka.png" />
            <SubTop>
                <ImagePhrase src="./production/18th-.png" />
                <ImageDate src="./production/date.png" />
            </SubTop>
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
                <Kikaku>
                    <Link href="/Gakusai"><KikakuFrame><KikakuTitle>学祭企画</KikakuTitle></KikakuFrame></Link>
                    <KikakuPhrase>芸工祭では、様々な企画がイベントを開催します。舞台、音響、衣装、照明など全てを学生が一から作り上げ、芸工祭を彩ります。</KikakuPhrase>
                    <Logo>
                        <Link href="/Zenya"><LogoFrame><LogoImage src="./production/zenya.png"/></LogoFrame></Link>
                        <Link href="http://project-of-2ken.com/21withyou/"><LogoFrame><LogoImage src="./production/2ken.png"/></LogoFrame></Link>
                        <Link href="/CBA"><LogoFrame><LogoImage src="./production/cbalogo.png"/></LogoFrame></Link>
                        <Link href="https://3kenfunsui.github.io/2021/"><LogoFrame><LogoImage src="./production/3ken.png"/></LogoFrame></Link>
                    </Logo>
                    <Logo>
                        <Link href="/Firefes"><LogoFrame><LogoImage src="./production/firefes.png"/></LogoFrame></Link>
                        <Link href="/Panf"><LogoFrame><LogoImage src="./production/Panf.png"/></LogoFrame></Link>
                        <Link href="/Workshop"><LogoFrame><LogoImage src="./production/5ken.png"/></LogoFrame></Link>
                        <Link href="/Nullken"><LogoFrame><LogoImage src="./production/nullkenlogo.png"/></LogoFrame></Link>
                    </Logo>
                </Kikaku>
                <Kikaku>
                    <Link href="/Workshop"><KikakuFrame><KikakuTitle>5研企画</KikakuTitle></KikakuFrame></Link>
                    <KikakuPhrase>5研企画は、芸工祭実行委員会である5研が運営する企画です。今年度はワークショップを実施します。</KikakuPhrase>
                </Kikaku>
                <Kikaku>
                    <Link href="/ippan-kikaku"><KikakuFrame><KikakuTitle>一般企画</KikakuTitle></KikakuFrame></Link>
                    <KikakuPhrase>一般企画は、教室などで学部内外からの公募により実施されます。</KikakuPhrase>
                </Kikaku>
        </Contents>
        <Sub><SubImage src="./production/info.png"/></Sub>
        <Info>
            <YouTube videoId="AdEcqR0XZWk" opts={opts}/> 
            <Link href="/Panf"><PanfImage src="./production/panf_button.png" /></Link>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeU7JA71AgD5XiEHCdIuxYNr05rwvpCj1LheN8TSms4iGxEnw/viewform?usp=sf_link"><FormButtom>対面参加応募フォーム</FormButtom></Link>
        </Info>
        <Back src="./production/tothetop.png" onClick={returnTop} />
        <Footer />
    </Frame>
}