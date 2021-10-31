import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'
import Link from 'next/dist/client/link'

const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`
const Title = styled.h2`
    font-family: 游ゴシック;
    color: #633701;
`
const Phrase = styled.p`
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    font-family: 游ゴシック;
    font-size: 2.0vw;
`
const LogoLeft = styled.div`
    display: flex;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5vh;
    margin-bottom: 5vh;
`
const LogoImageLeft = styled.img`
    width: 30%;
    margin-left: 5vw;
`
const LogoFrameLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 3vw;
`
const LogoRight = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5vh;
    margin-bottom: 5vh;
`
const LogoImageRight = styled.img`
    width: 30%;
    margin-right: 5vw;
`
const LogoFrameRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 3vw;
`
const LogoTitle = styled.p`
    font-size: 3vw;
    font-weight: bold;
    font-family: 游ゴシック;
    margin-bottom: 0;
`
const LogoPhrase = styled.p`
    font-size: 1.7vw;
    font-family: 游ゴシック;
    margin-top: 0;
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
export default function GakusaiPhone(){
    return <Frame>
        <Header />
        <Sub><SubImage src="./production/content.png" /></Sub>
        <Title>学祭企画</Title>
        <Phrase>芸工祭では、様々な企画がイベントを開催します。舞台、音響、衣装、照明など全てを学生が一から作り上げ、芸工祭を彩ります。</Phrase>
        <LogoLeft>
            <Link href="/Zenya"><LogoImageLeft src="./production/zenya.png"/></Link>
            <LogoFrameLeft>
                <LogoTitle>zenya</LogoTitle>
                <LogoPhrase>text text</LogoPhrase>
            </LogoFrameLeft>
        </LogoLeft>
        <LogoRight>
            <Link href="/"><LogoImageRight src="./production/2ken.png"/></Link>
            <LogoFrameRight>
                <LogoTitle>2研企画</LogoTitle>
                <LogoPhrase>text text</LogoPhrase>
            </LogoFrameRight>
        </LogoRight>
        <LogoLeft>
            <Link href="/CBA"><LogoImageLeft src="./production/cbalogo.png"/></Link>
            <LogoFrameLeft>
                <LogoTitle>CBA project</LogoTitle>
                <LogoPhrase>text text</LogoPhrase>
            </LogoFrameLeft>
        </LogoLeft>
        <LogoRight>
            <Link href="/"><LogoImageRight src="./production/3ken.png"/></Link>
            <LogoFrameRight>
                <LogoTitle>噴水企画(3研)</LogoTitle>
                <LogoPhrase>text text</LogoPhrase>
            </LogoFrameRight>
        </LogoRight>
        <LogoLeft>
            <Link href="/Firefes"><LogoImageLeft src="./production/firefes.png"/></Link>
            <LogoFrameLeft>
                <LogoTitle>火祭</LogoTitle>
                <LogoPhrase>text text</LogoPhrase>
            </LogoFrameLeft>
        </LogoLeft>
        <LogoRight>
            <Link href="/Panf"><LogoImageRight src="./production/Panf.png"/></Link>
            <LogoFrameRight>
                <LogoTitle>Panf</LogoTitle>
                <LogoPhrase>text text</LogoPhrase>
            </LogoFrameRight>
        </LogoRight>
        <LogoLeft>
            <Link href="/Goken"><LogoImageLeft src="./production/5ken.png"/></Link>
            <LogoFrameLeft>
                <LogoTitle>5研企画</LogoTitle>
                <LogoPhrase>text text</LogoPhrase>
            </LogoFrameLeft>
        </LogoLeft>
        <LogoRight>
            <Link href="/Nullken"><LogoImageRight src="./production/nullkenlogo.png"/></Link>
            <LogoFrameRight>
                <LogoTitle>未定研</LogoTitle>
                <LogoPhrase>text text</LogoPhrase>
            </LogoFrameRight>
        </LogoRight>
        <Back src="./production/tothetop.png" onClick={returnTop} />
        <Footer />
    </Frame>
}