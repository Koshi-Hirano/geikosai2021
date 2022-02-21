import styled from "styled-components"
import Header from "./components/Header"
import Footer from "./components/Footer"
import YouTube from "react-youtube";
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
const Pharse = styled.img`
    width: 90%;
    margin-bottom: 10vh;
`
const YoutubeFrame = styled.div`
    height: 25vh;
    margin-bottom: 10vh;
`
const WorkshopButton = styled.img`
    width: 70%;
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
export default function WorkshopPhone(){
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
    const opts = {
        height: '200',
        width: '300',
    }
    return <Frame>
        <Header />
        {GeikoRandom()}
        <Sub><SubImage src="./production/workshop.png" /></Sub>
        <Pharse src="./production/workshop1.png" />
        <YoutubeFrame>
            <YouTube videoId="wMcBCMK144I" opts={opts} />
        </YoutubeFrame>
        <Pharse src="./production/workshop2.png" />
        <Link href="https://drive.google.com/file/d/1lOx8XQBGyl20TonBnKnkPl9mk9qRzmqj/view?usp=sharing"><WorkshopButton src="./production/workshop_button.png" /></Link>
        <Back src="./production/tothetop.png" onClick={returnTop} />
        <Footer />
    </Frame>
}