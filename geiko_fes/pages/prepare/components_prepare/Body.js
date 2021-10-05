import styled from "styled-components"

const Information = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    margin-top: 3vh;
    margin-bottom: 12vh;
`
const DateBox = styled.div`
    width: 100%;
`
const DateValue = styled.p`
    color: black;
    font-family: "OCRB", monospace;
    font-size: 10vw;
    font-weight: bold;
    text-decoration: underline;
    margin-left: auto;
    margin-right: auto;
`
const WipBox = styled.div`
    width: 50vw;
    height: 50vw;
    border-radius: 50%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
`
const WipImage = styled.img`
    width: 100%;
	height: auto;
	margin-left: auto;
	margin-right: auto;
`
const Saru = styled.div`
    text-align: center;
    bottom: 0;
`
const SaruImage = styled.img`
    width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: -30px;
`
export default function Body(){
    return <div>
        <Information>
            <DateBox>
                <DateValue>2021.11.6-7</DateValue>
            </DateBox>
            <WipBox>
                <WipImage src="../../prepare/wip.png"/>
            </WipBox>
        </Information>
        <Saru>
            <SaruImage src="../../prepare/18saru.png" alt="18saru_1"/>
        </Saru>
    </div>
}