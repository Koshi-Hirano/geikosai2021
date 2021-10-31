import Header from './components/Header'
import styled from 'styled-components'

const Frame = styled.div`
    display: flex;
`
const Container = styled.div`
    width: 82vw;
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
    justify-content: space-around;
    width: 70%;
    margin-right: auto;
    margin-left: auto;
`
const MascotImage = styled.img`

`
const MascotBox = styled.div`

`
const MascotTitle = styled.h3`
    font-family: 游ゴシック;
    color: #633701;
`
const MascotPhrase = styled.p`
    font-family: 游ゴシック;
    font-size: 1.2vw;
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
    return <Frame>
        <Header />
        <Container>
            <Sub><SubImage src="./production/whatis.png"/></Sub>
            <About>
                <AboutImage src="./production/ku-sui_photo.png" />
            </About>
            <Sub><SubImage src="./production/date1.png"/></Sub>
            <Date src="./production/schedule.png" />
            <Sub><SubImage src="./production/mascot.png"/></Sub>
            <Mascot>
                <MascotImage src="./production/"/>
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