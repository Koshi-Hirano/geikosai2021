import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'


const Container = styled.div`
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
`
const Geikochan = styled.img`
    width: 80%;
    margin-top: 5vh;
`
const Title = styled.p`
    text-align: left;
    margin-top: 7vw;
    margin-bottom: 5vw;
    margin-left: 17%;
    font-weight: bold;
    color: #633701;
    font-size: 4vw;
`
const Phrase = styled.p`
    text-align: left;
    margin-top: 5vw;
    margin-left: 20%;
    font-size: 3.5vw;
    font-weight: 500;
    line-height: 1.9;
    letter-spacing: 0.1em;
    color: rgb(100, 100, 100);
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
    margin-top: 15vh;
    margin-bottom: 5vh;
`
const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
};
export default function ContactPC(){

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

    return <Container>
        <Header />
        {GeikoRandom()}
        <Sub><SubImage src="./production/contact.png"/></Sub>
        <Title>第18回芸工祭実行委員会</Title>
        <Phrase>Mail：5ken18th@gmail.com</Phrase>
        <Phrase>Twitter：@QU_GEIKOfes_18</Phrase>
        <Title>第18回芸工祭一般企画</Title>
        <Phrase>
            Mail：gfes.ippantent@gmail.com
        </Phrase>
        <Back src="./production/tothetop.png" onClick={returnTop} />
        <Footer />
    </Container> 
}