import Header from './components/Header'
import styled from 'styled-components'

const Frame = styled.div`
    display: flex;
`
const Container = styled.div`
    width: 82vw;
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
`
const Geikochan = styled.img`
    width: 80%;
`
const About = styled.div`

`
const AboutImage = styled.img`
    width: 70%
`
const Date = styled.img`
    width: 70%;
    margin-left: auto;
    margin-right: auto;
`
const Mascot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-left: 12%;
`
const MascotImage = styled.img`
    width: 35%;
`
const MascotBox = styled.div`
    width: 60%;
    margin-left: 0%;
    
`
const MascotTitle = styled.p`
    font-size: 3vw;
    font-weight: 1000;
    color: #633701;
`
const MascotPhrase = styled.p`
    font-weight: 500;
    font-size: 1.8vw;
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
export default function AboutPC(){

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
            <Sub><SubImage src="./production/whatis.png"/></Sub>
            <About>
                <AboutImage src="./production/ku-sui_photo.png" />
            </About>
            <Sub><SubImage src="./production/date1.png"/></Sub>
            <Date src="./production/schedule.png" />
            <Sub><SubImage src="./production/mascot.png"/></Sub>
            <Mascot>
                <MascotImage src="./production/geiko-chan.png"/>
                <MascotBox>
                    <MascotTitle>げいこちゃん</MascotTitle>
                    <MascotPhrase>
                        芸工祭の公式マスコットキャラクター！<br/>
                        芸工祭の案内人とはこの子の事<br />
                        芸工祭の「芸」がモチーフです。<br />
                        芸工祭では実際に会えるかも？
                    </MascotPhrase>
                </MascotBox>
            </Mascot>
            <Back src="./production/tothetop.png" onClick={returnTop} />
        </Container>        
    </Frame>
}