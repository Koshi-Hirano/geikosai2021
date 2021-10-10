import styled from "styled-components"

const Logo = styled.div`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`
const LogoImage = styled.img`
    width: 20vh;
    max-width: 100%;
    height: auto;
`
const EventDate = styled.div`
    width: 70%;
    height: auto;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    padding-top: auto;
    padding-bottom: auto;
`
const DataTitle = styled.a`
    color: black;
    font-family: "Hina Mincho", serif;
    font-size: 4vmin;
    font-weight: bold;
`
const DateText = styled.a`
    color: black;
    font-family: "Hina Mincho", serif;
    font-size: 7vmin;
    font-weight: bold;
`
const Wip = styled.div`
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
`
const WipText = styled.a`
    color: #4B2C14;
    font-family: "Hina Mincho", serif;
    font-size: 6vmin;
    font-weight: bold;
    line-height: 450%
`
export default function Content(){
    return <div>
        <Logo>
            <LogoImage src="./prepare/logo.png"/>
        </Logo>
        <EventDate>
            <DataTitle>開催日</DataTitle><br/>
            <DateText>2021.11.6(土) - 7(日)</DateText>         
        </EventDate>
        <Wip>
            <WipText>準備中</WipText>
        </Wip>        
    </div>
}