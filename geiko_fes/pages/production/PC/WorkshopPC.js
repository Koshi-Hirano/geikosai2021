import Header from './components/Header'
import styled from 'styled-components'
import YouTube from "react-youtube";
import Link from "next/link"

const Frame = styled.div`
    display: flex;
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
`
const Container = styled.div`
    width: 82vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Geikochan = styled.img`
    width: 80%;
`
const Pharse = styled.img`
    width: 65%;
    margin-bottom: 10vh;
`
const YoutubeFrame = styled.div`
    height: 50vh;
    margin-bottom: 10vh;
`
const WorkshopButton = styled.img`
    width: 40%;
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
    transition: 1s;
    &:hover{
        transform: rotateX( 360deg );
    }
`

const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
};
export default function WorkshopPC(){

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
    
    }

    return <Frame>
        <Header />
        <Container>
            {GeikoRandom()}
            <Sub><SubImage src="./production/workshop.png" /></Sub>
            <Pharse src="./production/workshop1.png" />
            <YoutubeFrame>
                <YouTube videoId="wMcBCMK144I" opts={opts} />
            </YoutubeFrame>
            <Pharse src="./production/workshop2.png" />
            <Link href="https://drive.google.com/file/d/1lOx8XQBGyl20TonBnKnkPl9mk9qRzmqj/view?usp=sharing"><WorkshopButton src="./production/workshop_button.png" /></Link>
            <Back src="./production/tothetop.png" onClick={returnTop} />
        </Container>       
    </Frame>
}