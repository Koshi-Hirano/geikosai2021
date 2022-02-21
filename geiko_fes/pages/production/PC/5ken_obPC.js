import Header from './components/Header'
import styled from 'styled-components'
import Link from "next/link"

const Frame = styled.div`
    display: flex;
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
`
const Container = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Phrase = styled.p`
    font-size: 2vw;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
`
export default function ObPC(){
    return <Frame>
        <Header />
        <Container>
            <Link href="https://geikosai2021.github.io/5ken_ob/"><Phrase>5研OBへのページはこちら</Phrase></Link>
        </Container>
    </Frame>
}