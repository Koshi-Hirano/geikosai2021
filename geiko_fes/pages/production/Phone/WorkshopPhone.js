import Header from "../Phone/components/Header"
import Footer from "../Phone/components/Footer"
import styled from "styled-components"

const Frame = styled.div`

`
export default function WorkshopPhone(){
    return <Frame>
        <Header />
        Workshop
        <Footer />
    </Frame>
}