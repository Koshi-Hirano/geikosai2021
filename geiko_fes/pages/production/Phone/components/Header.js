import styled, { keyframes } from 'styled-components'
import Link from 'next/link'

const Frame = styled.div`
    width: 100vw;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(230, 230, 230, 0.5); 
`
const Home = styled.img`
    height: 50%;
    margin-left: 5%;
`
const Logo = styled.img`
    height: 90%;
`

const Menu = styled.label`
    height: 35%;
    margin-right: 5%;
`
const MenuImage = styled.img`
    height: 100%;
`
const MenuContent = styled.nav`
    display: none;
    background-color: rgb(230, 230, 230);
    position: fixed;
    width: 100vw;
    height: 100vh;
`
const Close = styled.label`
    width: 100%;
    height: 15vh;
    padding: 0;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
`
const CloseImage = styled.img`
    height: 35%;
    margin-right: 5%;
`
const MenuItem = styled.p`

`
const Hiden = keyframes`
    from { 
        opacity: 0;
    }
    to { 
        opacity: 1;
    }
`
const NavHidden = styled.input`
    display: none;
    &:checked + ${MenuContent} {
        display: block;
        animation: ${Hiden} 1s;
    }
    &:
`
export default function Header(){
    return  <div>
        <NavHidden id="nav-input" type="checkbox"/>
        <MenuContent>
            <Close for="nav-input">
                <CloseImage src="./production/menu.png" />
            </Close>
            <Link href="/About"><MenuItem>芸工祭について</MenuItem></Link>
            <Link href="/Schedule"><MenuItem>スケジュール</MenuItem></Link>
            <Link href="/Gakusai"><MenuItem>学祭企画</MenuItem></Link>
        </MenuContent>
        <Frame>
            <Link href="./HomePage">
                <Home src="./production/to_home.png" />
            </Link>
            <Link href='/HomePage'>
                <Logo src="./production/logo_touka.png" />
            </Link>
            <Menu for="nav-input">
                <MenuImage src="./production/menu.png" />
            </Menu>
        </Frame>
    </div>
    
}