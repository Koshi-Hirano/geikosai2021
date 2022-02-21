import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'
import Link from 'next/dist/client/link'

const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`
const Geikochan = styled.img`
    width: 80%;
    margin-top: 5vh;
`
const Schedule = styled.div`

`
const ScheduleImage = styled.img`
    width: 80%;
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
export default function SchedulePhone(){
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
        <Sub><SubImage src="./production/schedule_title.png"/></Sub>
        <Schedule>
            <ScheduleImage src="./production/schedule_guide.png" />
        </Schedule>
        <Back src="./production/tothetop.png" onClick={returnTop} />
        <Footer />
    </Frame>
}