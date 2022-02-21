import Header from './components/Header'
import styled from 'styled-components'

const Frame = styled.div`
    display: flex;
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
`
const Container = styled.div`
    width: 82vw;
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
`
const Geikochan = styled.img`
    width: 80%;
`
const Title = styled.p`
    text-align: left;
    margin-top: 7vw;
    margin-bottom: 5vw;
    margin-left: 20%;
    font-weight: bold;
    color: #633701;
    font-size: 3vw;
`
const Phrase = styled.p`
    text-align: left;
    margin-top: 3vw;
    margin-left: 25%;
    font-size: 2.2vw;
    line-height: 1.9;
    letter-spacing: 0.1em;
    color: rgb(100, 100, 100);
`
const Sub = styled.div`
    margin-top: 15vw;
    margin-bottom: 0vw;
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
const Back = styled.img`
    width 10%;
    margin-top: 30vh;
    margin-bottom: 10vh;
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

    return <Frame>
        <Header />
        <Container>
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
        </Container>        
    </Frame> 
}