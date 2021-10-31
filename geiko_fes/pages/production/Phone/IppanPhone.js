import styled from "styled-components"
import Header from "./components/Header"
import Footer from "./components/Footer"

const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const MainFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10vh;
`
const SubFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 60%;
`
const Title = styled.h1`
    margin-top: 5vh;
    margin-bottom: 5vh;
`
const Phrase = styled.p`

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
export default function IppanPhone(){
    return <Frame>
        <Header />
        <Sub><SubImage src="./production/content.png" /></Sub>
        <MainFrame>
            <Title>一般企画</Title>
            <Phrase>text text text text text</Phrase>
        </MainFrame>
        <SubFrame>
            <Title>anima</Title>
            <Phrase>text text text text text</Phrase>
        </SubFrame>
        <SubFrame>
            <Title>???</Title>
            <Phrase>text text text text text</Phrase>
        </SubFrame>
        <Back src="./production/tothetop.png" onClick={returnTop} />
        <Footer />
    </Frame>
}