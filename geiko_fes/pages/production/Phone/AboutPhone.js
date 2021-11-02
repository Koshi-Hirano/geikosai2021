import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'
import Link from 'next/link'

const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Geikochan = styled.img`
    width: 80%;
    margin-top: 5vh;
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
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 70%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 15vh:
`
const MascotImage = styled.img`
    width: 60%;
    margin-bottom: 5vh;
`
const MascotBox = styled.div`

`
const MascotTitle = styled.h3`
    font-family: 游ゴシック;
    color: #633701;
`
const MascotPhrase = styled.p`
    font-family: 游ゴシック;
    font-size: 1.5vw;
    font-weight: 600;
    line-height: 2.0;
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
    margin-top: 15vh;
    margin-bottom: 5vh;
`
const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
};

export default function AboutPhone(){
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
        <Footer />
    </Frame>
}