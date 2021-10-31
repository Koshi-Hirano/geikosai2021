import Header from './components/Header'
import styled from 'styled-components'
import Link from 'next/link'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const Frame = styled.div`
    display: flex;
`
const Container = styled.div`
    width: 82vw;
`

const Top = styled.div`
    width: 100%;
    height: 80vh;
    margin-top: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ImagePhrase = styled.img`
    width: 27%;
    height: auto;
`
const ImageTop = styled.img`
    width: 30%;
    height: auto;
    margin-left: 0;
    margin-right: 3%;
`
const ImageDate = styled.img`
    width: 25%;
    height: auto;
`

const News = styled.div`
    width: 60%;
    height: 80vh; 
    margin-left: auto;
    margin-right: auto;
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
`
const GakusaiTitle = styled.h3`
    font-family: 游ゴシック;
    color: #633701;
`
const GakusaiPhrase = styled.p`
    font-family: 游ゴシック;
    text-align: left;
    font-size: 1.2vw;
`
const Logo = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 8%;
`
const LogoImage = styled.img`
    width: 15%;
    height: auto;
`
const Other = styled.div`
    display: flex;
    justify-content: center;
`
const Kikaku = styled.div`
    width: 45%;
    margin: 2%;
`
const KikakuTitle = styled.h3`
    font-family: 游ゴシック;
    color: #633701;
`
const KikakuPhrase = styled.p`
    font-family: 游ゴシック;
    text-align: left;
    font-size: 1.2vw;
`

const Info = styled.div`
    display: grid;
    grid-template-columns: 13vw 13vw;
    gap: 2vw;
    padding-left: 26vw;
    margin-top: 10vh;
`
const InfoItem = styled.button`
    background-color: transparent;
    border-color: #402300;
    font-size: 1.5vw;
    height: 10vh;
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
`
const SubImage = styled.img`
    height: 8vh;
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
        height: '80vh',
    }

    return <Frame>
        <Header />
        <Container>
            <Top>
                <ImagePhrase src="./production/18th-.png" />
                <ImageTop src="./production/logo_touka.png" />
                <ImageDate src="./production/date.png" />
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
                    <Link href="/Gakusai"><GakusaiTitle>学祭企画</GakusaiTitle></Link>
                    <GakusaiPhrase>芸工祭では、様々な企画がイベントを開催します。舞台、音響、衣装、照明など全てを学生が一から作り上げ、芸工祭を彩ります。</GakusaiPhrase>
                    <Logo>
                        <Link href="/Zenya"><LogoImage src="./production/zenya.png"/></Link>
                        <Link href="http://project-of-2ken.com/21withyou/"><LogoImage src="./production/2ken.png"/></Link>
                        <Link href="/CBA"><LogoImage src="./production/cbalogo.png"/></Link>
                        <Link href="/"><LogoImage src="./production/3ken.png"/></Link>
                    </Logo>
                    <Logo>
                        <Link href="/Firefes"><LogoImage src="./production/firefes.png"/></Link>
                        <Link href="/Panf"><LogoImage src="./production/Panf.png"/></Link>
                        <Link href="/Goken"><LogoImage src="./production/5ken.png"/></Link>
                        <Link href="/Nullken"><LogoImage src="./production/nullkenlogo.png"/></Link>
                    </Logo>
                </GakusaiKikaku>
                <Other>
                    <Kikaku>
                        <Link href="/Goken"><KikakuTitle>5研企画</KikakuTitle></Link>
                        <KikakuPhrase>5研企画は、芸工祭実行委員会である5研が運営する企画です。今年度は、、、、、、を実施します。</KikakuPhrase>
                    </Kikaku>
                    <Kikaku>
                        <Link href="/ippan-kikaku"><KikakuTitle>一般企画</KikakuTitle></Link>
                        <KikakuPhrase>一般企画は、教室などで学部内外からの公募により実施されます。</KikakuPhrase>
                    </Kikaku>
                </Other>
            </Contents>
            <Sub><SubImage src="./production/info.png"/></Sub>
            <Info>
                <Link href="/" ><InfoItem>企画団体の方へ</InfoItem></Link>
                <Link href="/" ><InfoItem>ご視聴の方へ</InfoItem></Link>
                <Link href="/" ><InfoItem>お問い合わせ</InfoItem></Link>
                <Link href="/" ><InfoItem>リンク</InfoItem></Link>
            </Info>
            <Back src="./production/tothetop.png" onClick={returnTop} />
        </Container>
    </Frame>
}