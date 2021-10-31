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
const Schedule = styled.div`

`
const ScheduleImage = styled.img`
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
export default function SchedulePhone(){
    return <Frame>
        <Header />
        <Sub><SubImage src="./production/schedule_title.png"/></Sub>
        <Schedule>
            <ScheduleImage src="./production/schedule_guide.png" />
        </Schedule>
        <Back src="./production/tothetop.png" onClick={returnTop} />
        <Footer />
    </Frame>
}