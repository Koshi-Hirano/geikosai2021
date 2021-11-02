import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'
import Link from 'next/dist/client/link'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    align-items: center;
`
const TopImage = styled.img`
    width: 45%;
    height: auto;
`
const ImagePhrase = styled.img`
    width: 90%;
    height: auto;
    margin-top: 10%;
    margin-bottom: 10%;
`
const ImageDate = styled.img`
    width: 70%;
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
const Kikaku = styled.div`
    margin-left: 3%;
    margin-right: 3%;
    margin-bottom: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const KikakuTitle = styled.h3`
    font-family: 游ゴシック;
    color: #633701;
`
const KikakuPhrase = styled.p`
    font-family: 游ゴシック;
    text-align: left;
    font-size: 2.0vw;
    width: 100%;
`
const Logo = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-around;
    margin-top: 8%;
`
const LogoFrame = styled.div`
    width: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
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
const InfoItem = styled.button`
    background-color: transparent;
    border-color: #402300;
    font-size: 3.0vw;
    width: 30vw;
    height: 10vh;
    margin-bottom: 5vh;
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
`

const Back = styled.img`
    width 10%;
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
        height: '80vh',
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
                    <Link href="/Gakusai"><KikakuTitle>学祭企画</KikakuTitle></Link>
                    <KikakuPhrase>芸工祭では、様々な企画がイベントを開催します。舞台、音響、衣装、照明など全てを学生が一から作り上げ、芸工祭を彩ります。</KikakuPhrase>
                    <Logo>
                        <Link href="/Zenya"><LogoFrame><LogoImage src="./production/zenya.png"/></LogoFrame></Link>
                        <Link href="http://project-of-2ken.com/21withyou/"><LogoFrame><LogoImage src="./production/2ken.png"/></LogoFrame></Link>
                        {/*<Link href="/CBA">*/}<LogoFrame><LogoImageHidden src="./production/cbalogo.png"/></LogoFrame>{/*</Link>*/}
                        {/*<Link href="/">*/}<LogoFrame><LogoImageHidden src="./production/3ken.png"/></LogoFrame>{/*</Link>*/}
                    </Logo>
                    <Logo>
                        {/*<Link href="/Firefes">*/}<LogoFrame><LogoImageHidden src="./production/firefes.png"/></LogoFrame>{/*</Link>*/}
                        <Link href="/Panf"><LogoFrame><LogoImage src="./production/Panf.png"/></LogoFrame></Link>
                        {/*<Link href="/Goken">*/}<LogoFrame><LogoImageHidden src="./production/5ken.png"/></LogoFrame>{/*</Link>*/}
                        {/*<Link href="/Nullken">*/}<LogoFrame><LogoImageHidden src="./production/nullkenlogo.png"/></LogoFrame>{/*</Link>*/}
                    </Logo>
                </Kikaku>
                <Kikaku>
                    <Link href="/Goken"><KikakuTitle>5研企画</KikakuTitle></Link>
                    <KikakuPhrase>5研企画は、芸工祭実行委員会である5研が運営する企画です。今年度は、、、、、、を実施します。</KikakuPhrase>
                </Kikaku>
                <Kikaku>
                    <Link href="/ippan-kikaku"><KikakuTitle>一般企画</KikakuTitle></Link>
                    <KikakuPhrase>一般企画は、教室などで学部内外からの公募により実施されます。</KikakuPhrase>
                </Kikaku>
        </Contents>
        <Sub><SubImage src="./production/info.png"/></Sub>
        <Info>
            <Link href="/" ><InfoItem>企画団体の方へ</InfoItem></Link>
            <Link href="/" ><InfoItem>ご視聴の方へ</InfoItem></Link>
            <Link href="/" ><InfoItem>お問い合わせ</InfoItem></Link>
            <Link href="/" ><InfoItem>リンク</InfoItem></Link>
        </Info>
        <Back src="./production/tothetop.png" onClick={returnTop} />
        <Footer />
    </Frame>
}