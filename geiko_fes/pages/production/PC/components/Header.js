import styled, { keyframes } from 'styled-components'
import Link from 'next/link'

const Frame = styled.div`
    width: 18vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    border-right: 1px solid #c9c9c9;
`
const LogoFrame = styled.div`
    width: 100%;
    height: 30vh;
    border-bottom: 1px solid #c9c9c9;
    display: flex;
    align-items: center;
`
const ImageLogo = styled.img`
    width: 60%;
    margin-left: auto;
    margin-right: auto;
`
const MenuFrame1 = styled.div`
    height: 40vh;
    display: flex;
    padding-top: 8%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-bottom: 1px solid #c9c9c9;
    background-color: #e2fdf8;
`
const MenuFrame2 = styled.div`
    height: 23vh;
    display: flex;
    padding-top: 8%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-bottom: 1px solid #c9c9c9;
    background-color: #bbeaea;
`
const MenuItem1 = styled.p`
    font-size: 1.3vw;
    font-weight: 500;
    background: linear-gradient(transparent 70%, white 70%);
    margin-left: 15%;
    margin-top: 3%;
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
`
const MenuItem2 = styled.p`
    font-size: 1.3vw;
    font-weight: 500;
    background: linear-gradient(transparent 70%, white 70%);
    margin-left: 15%;
    margin-top: 0;
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
`
const TwitterFrame = styled.div`
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #c9c9c9;
    background-color: rgb(220, 220, 220);
`
const TwitterImage = styled.img`
    width: 10%;
`
const TwitterItem = styled.button`
    border: none;
    background-color: transparent;
    font-size: 1.2vw;
    font-weight: 500;
    font-family: 游ゴシック;
    background: linear-gradient(transparent 70%, white 70%);
`
export default function Header(){
    return <Frame>
        <LogoFrame>
            <Link href='/HomePage'>
                <ImageLogo src="/production/logo_touka.png" />
            </Link>
        </LogoFrame>
        <MenuFrame1>
            <Link href='/About'><MenuItem1>芸工祭について</MenuItem1></Link>
            <Link href='/Schedule'><MenuItem1>スケジュール</MenuItem1></Link>
            <Link href='/Gakusai'><MenuItem1>学祭企画</MenuItem1></Link>
            <Link href='/Workshop'><MenuItem1>5研企画</MenuItem1></Link>
            <Link href='/ippan-kikaku'><MenuItem1>一般企画</MenuItem1></Link>
        </MenuFrame1>
        <MenuFrame2>
            <Link href='/Contact'><MenuItem2>お問い合わせ</MenuItem2></Link>
            <Link href='https://kyudaisai.jp/74th/link/'><MenuItem2>九大祭ホームページ</MenuItem2></Link>
            <Link href='https://geiko.app/2021/11/04/connect-geikosai2021/'><MenuItem2>芸工アプリ</MenuItem2></Link>
        </MenuFrame2>
        <TwitterFrame>
            <TwitterImage src="/production/twitter.png"/>
            <Link href='https://twitter.com/QU_GEIKOfes_18'>
                <TwitterItem>TWITTER</TwitterItem>
            </Link>
        </TwitterFrame>
    </Frame>
}