import styled from 'styled-components'

const Frame = styled.div`
    width: 100vw;
    height: 10vh;
    background-color: rgba(170, 170, 170, 1);
    display: flex;
    justify-content: center;
    align-items: center;
` 
const Small = styled.small`
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
    font-weight: 500;
`
export default function Footer(){
    return <Frame>
        <Small>&copy; 2021 芸工祭実行委員会</Small>
    </Frame>
}