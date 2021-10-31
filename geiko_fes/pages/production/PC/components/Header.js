import styled from 'styled-components'
import Link from 'next/link'

const Frame = styled.div`
    width: 18vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    background-color: rgb(225, 252, 242);
    border-right: 1px solid #c9c9c9;
`
const LogoFrame = styled.div`
    width: 100%;
    height: 40vh;
    border-bottom: 1px solid #c9c9c9;
    display: flex;
    align-items: center;
`
const ImageLogo = styled.img`
    width: 60%;
    margin-left: auto;
    margin-right: auto;
`
const MenuFrame = styled.div`
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-bottom: 1px solid #c9c9c9;
`
const MenuItem = styled.button`
    border: none;
    background-color: transparent;
    font-size: 1.2vw;
    font-family: 游ゴシック;
    text-decoration:underline;
    text-decoration-color:#FFFFFF;
    margin-left: 20%;
    margin-top: 8%;
`
const TwitterFrame = styled.div`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #c9c9c9;
`
const TwitterImage = styled.img`
    width: 10%;
`
const TwitterItem = styled.button`
    border: none;
    background-color: transparent;
    font-size: 1.2vw;
    font-family: 游ゴシック;
    text-decoration:underline;
    text-decoration-color:#FFFFFF;
`
export default function Header(){
    return <Frame>
        <LogoFrame>
            <Link href='/HomePage'>
                <ImageLogo src="./production/logo_touka.png" />
            </Link>
        </LogoFrame>
        <MenuFrame>
            <Link href='/About'><MenuItem>芸工祭について</MenuItem></Link>
            <Link href='/Schedule'><MenuItem>スケージュール</MenuItem></Link>
            <Link href='/Gakusai'><MenuItem>学祭企画</MenuItem></Link>
        </MenuFrame>
        <MenuFrame>
            <Link href='/'><MenuItem>ご案内</MenuItem></Link>
            <Link href='/'><MenuItem>お問い合わせ</MenuItem></Link>
            <Link href='https://kyudaisai.jp/74th/link/'><MenuItem>九大祭ホームページ</MenuItem></Link>
        </MenuFrame>
        <TwitterFrame>
            <TwitterImage src="./production/twitter.png"/>
            <Link href='https://twitter.com/QU_GEIKOfes_18'>
                <TwitterItem>TWITTER</TwitterItem>
            </Link>
        </TwitterFrame>
    </Frame>
}