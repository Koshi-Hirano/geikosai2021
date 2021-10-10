import styled from 'styled-components'

const Frame = styled.div`
    height: 10%;
    background-color: white;
    text-align: center;
`
const Title = styled.a`
    color: #47953D;
    font-family: "Hina Mincho", serif;
    font-size: 3vmax;
    font-weight: bold;
`
export default function Header(){
    return <Frame className="header_">
        <Title className="header_title">第18回 芸工祭</Title>
    </Frame>
} 