import Header from './components/Header'
import styled from 'styled-components'

const Frame = styled.div`
    display: flex;
`
const Container = styled.div`
    width: 82vw;
`
const Schedule = styled.div`

`
const ScheduleImage = styled.img`
    width: 70%;
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
export default function SchedulePC(){
    return <Frame>
        <Header />
        <Container>
            <Sub><SubImage src="./production/schedule_title.png"/></Sub>
            <Schedule>
                <ScheduleImage src="./production/schedule_guide.png" />
            </Schedule>
            <Back src="./production/tothetop.png" onClick={returnTop} />
        </Container>       
    </Frame>
}