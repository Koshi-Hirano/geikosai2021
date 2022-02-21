import styled, { keyframes } from 'styled-components'
import Link from 'next/link'

const Frame = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(230, 230, 230, 0.5);
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif; 
`
const Home = styled.img`
    height: 50%;
    margin-left: 5%;
`
const Logo = styled.img`
    height: 80%;
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
    z-index: 1;
`
const Close = styled.label`
    width: 100%;
    height: 10vh;
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
    font-size: 4vw;
    width: 100vw;
    margin-top: 5vh;
    
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
`
const Line = styled.hr`
    width: 80%;
    margin-top: 5vh;
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
            <Link href="/Workshop"><MenuItem>5研企画</MenuItem></Link>
            <Link href="/ippan-kikaku"><MenuItem>一般企画</MenuItem></Link>
            <Line />
            <Link href="/Contact"><MenuItem>お問い合わせ</MenuItem></Link>
            <Link href="https://kyudaisai.jp/74th/link/"><MenuItem>九大祭ホームページ</MenuItem></Link>
            <Link href="https://geiko.app/2021/11/04/connect-geikosai2021/"><MenuItem>芸工アプリ</MenuItem></Link>
            <Line />
            <Link href="https://twitter.com/QU_GEIKOfes_18"><MenuItem>Twitter</MenuItem></Link>
        </MenuContent>
        <Frame>
            <Link href="/HomePage">
                <Home src="/production/to_home.png" />
            </Link>
            <Link href='/HomePage'>
                <Logo src="/production/geikosai_logo.png" />
            </Link>
            <Menu for="nav-input">
                <MenuImage src="/production/menu.png" />
            </Menu>
        </Frame>
    </div>
}