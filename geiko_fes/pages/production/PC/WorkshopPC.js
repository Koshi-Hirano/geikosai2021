import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'

const Frame = styled.div`
    display: flex;
`
const Container = styled.div`
    width: 80vw;
`
export default function WorkshopPC(){
    return <Frame>
        <Header />
        <Container>
            Workshop
            <Footer />
        </Container>        
    </Frame>
}