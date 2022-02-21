import styled from "styled-components"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Link from "next/link"

const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
`
const Geikochan = styled.img`
    width: 80%;
    margin-top: 5vh;
`
const MainFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5vh;
`
const Title = styled.p`
    margin-top: 5vh;
    margin-bottom: 5vh;
    font-size: 6.0vw;
    font-weight: bold;
`
const Phrase = styled.p`
    width: 70%;
    font-size: 4.5vw;
    font-weight: 500;
    color: rgb(120, 120, 120);
`
const ButtonImage = styled.img`
    width: 60%;
    margin-bottom: 3vh;
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
export default function IppanPhone(){
    const GeikoRandom = () => {
        const random = Math.floor( Math.random() * 3 );
        if(random == 0){
            return <Geikochan src="./production/geiko-1.png" />
        }
        else if(random == 1){
            return <Geikochan src="./production/geiko-2.png" />
        }
        else if(random == 2){
            return <Geikochan src="./production/geiko-3.png" />
        }
    }
    return <Frame>
        <Header />
        {GeikoRandom()}
        <Sub><SubImage src="./production/content.png" /></Sub>
        <MainFrame>
            <Title>一般企画</Title>
            <Phrase>一般企画は、教室などで学部内外からの公募により実施されます。</Phrase>
        </MainFrame>
        <Link href="/FlyingPan"><ButtonImage src="./production/ippan4.png" /></Link>
        <Link href="https://animaproductionkid.wixsite.com/mysite/%E8%A4%87%E8%A3%BD-online-exhibition-%E3%82%B3%E5%B1%95"><ButtonImage src="./production/ippan3.png" /></Link>
        <Link href="https://geikosai2021.github.io/5ken_ob/"><ButtonImage src="./production/ippan2.png" /></Link>
        <Link href="https://3ken-ob-tent.studio.site/"><ButtonImage src="./production/ippan1.png" /></Link>
        <Back src="./production/tothetop.png" onClick={returnTop} />
        <Footer />
    </Frame>
}