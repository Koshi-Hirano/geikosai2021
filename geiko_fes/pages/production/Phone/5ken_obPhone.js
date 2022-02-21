import styled from "styled-components"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Link from "next/link"

const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
`
const Phrase = styled.p`
    font-size: 5vw;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5vh;
    height: 100vh;
`
export default function ObPhone(){
    return <Frame>
        <Header />
        <Link href="https://geikosai2021.github.io/5ken_ob/"><Phrase>5研OBへのページはこちら</Phrase></Link>
        <Footer />
    </Frame>
}