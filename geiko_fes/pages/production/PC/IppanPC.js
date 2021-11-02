import Header from './components/Header'
import styled from 'styled-components'

const Frame = styled.div`
    display: flex;
`
const Container = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Geikochan = styled.img`
    width: 80%;
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
export default function IppanPC(){

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
        <Container>
            {GeikoRandom()}
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
        </Container>       
    </Frame>
}