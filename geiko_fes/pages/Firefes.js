import styled from "styled-components"
import Head from "next/dist/shared/lib/head"
import Link from 'next/link'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const Frame = styled.div`
    font-family: serif;
    background-color: #e1e1e1;
`
const Header = styled.div`
    height:10vw;
    width:100%;
    background-color:black;
    display: flex;
    align-items: center;
    color: #fff;
    line-height: 7vw;
`
const HeaderImage = styled.img`
    height: 90%;
    margin-left:5vw;
`
const HeaderTitle = styled.p`
    font-size: 5vw;
    margin-right: 11vw;
    margin-left: 2vw;
    margin-top: 10vh;
    font-weight: bold;
`
const HeaderItem = styled.p`
    font-size: 2.5vw;
    margin: 0 6vw;
    margin-top: 5vh;
`

const TaimenImage = styled.img`
    width: 90%;
    margin-top: 2vh;
    margin-bottom: 10vh;
    margin-left: auto;
    margin-right: auto;
`

const Top = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom:10vw;
`
const TopImage = styled.img`
    width:40vw;
    margin-left:5vw;
` 
const Text = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`
const TextTitle = styled.p`
    font-size: 4vw;
    font-weight: bold;
    margin-top: 3vw;
    margin-right: 15vw;
    margin-bottom: 3vw;
`
const TextPhrase = styled.p`
    font-size:2vw;
`

const ScheduleFrame = styled.div`
    font-size: 4vw;
    margin-bottom:5vw;
`
const ScheduleText = styled.p`
    font-weight: bold;
    margin: 0;
`
const ScheduleDate = styled.p`
    margin: 0;
`
const SchedulePhrase = styled.p`
    font-size: 2.5vw;
    margin: 0;
`

const FirefesImage = styled.img`
    margin-bottom: 5vw;
    width: 96vw;
`

const LinkFrame = styled.div`

`
const LinkItem = styled.p`
    font-size: 2vw;
    font-weight: 700;
    line-height: 1.5;
    position: relative;
    display: inline-block;
    padding: 1rem 5rem;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    letter-spacing: 0.1em;
    color: black;
    border-radius: 100vw;
    margin-bottom:2vw;
`
const ButtomFrame = styled.div`
    height: 30vh;
`
const ButtomItem = styled.p`
    width: 20vw;
    font-size: 2.0vw;
    font-weight: 700;
    line-height: 1.5;
    position: relative;
    display: inline-block;
    padding: 1rem 1rem;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    letter-spacing: 0.1em;
    color: white;
    border-radius: 100vw;
    background-color: #9f000c;
    border-bottom: 5px solid #47000c;
    margin-right: 7vw;
    margin-left: 7vw;
    margin-bottom: 20vh;
    &:hover {
        margin-top: 3px;
        background: #9f000c;
        border-bottom: 2px solid #47000c;
    }
`

const TwitterFrame = styled.div`
    width: 70%;
    height: 50vh; 
    margin-left: auto;
    margin-right: auto;
`

const Footer = styled.div`
    height: 20vh;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 2vw;
    font-size: 2vw;
    margin-top: 60vh;
`
const FooterItem = styled.p`
    margin:0 4vw;
`
export default function Firefes(){
    const TwitterDesign = {
        width: '100%',
        height: '70vh',
    }

    return <Frame>
        <Head>
            <title>芸工祭企画第50代火祭</title>
            <link rel="icon" href="./production/logo_touka.png" />
        </Head>
        <Header>
            <HeaderImage src="./production/firefes.png" />
            <HeaderTitle>火祭</HeaderTitle>
            <Link href="https://www.youtube.com/channel/UCRbLmuWQc1-f-sewoofzD8w"><HeaderItem>配信リンク</HeaderItem></Link>
            <Link href="https://forms.gle/8pcJ4oaTEKUVyF2c7"><HeaderItem>対面参加フォーム</HeaderItem></Link>
        </Header>
        <TaimenImage src="./production/firefes3.png" />
        <Top>
            <TopImage src="./production/firefes1.jpeg" />
            <Text>
                <TextTitle>火祭頭から<br/>　　　ごあいさつ</TextTitle>
                <TextPhrase>jkさhfbひあえふぁ；ふぃおlしぇい<br/>fぁうえいlふぁいうbうぇyfぃあbへ<br/>ぃfhばぃづfhぅあいえすhfbぃうあうhぶえfぁ</TextPhrase>
            </Text>
        </Top>
        <ScheduleFrame>
            <ScheduleText>開催スケジュール</ScheduleText>
            <ScheduleDate>11/7 19:00　配信開始</ScheduleDate>
            <SchedulePhrase>説明云々カンヌンかくかくしかじか</SchedulePhrase>
        </ScheduleFrame>
        <FirefesImage src="./production/firefes2.jpeg"/>
        <LinkFrame>
            <LinkItem>配信での参加はこちら</LinkItem>
            <LinkItem>対面での参加はこちら</LinkItem>
        </LinkFrame>
        <ButtomFrame>
            <Link href="https://www.youtube.com/channel/UCRbLmuWQc1-f-sewoofzD8w"><ButtomItem>配信リンク</ButtomItem></Link>
            <Link href="/"><ButtomItem>申請フォーム</ButtomItem></Link>
        </ButtomFrame>
        <TwitterFrame>
            <TwitterTimelineEmbed sourceType="profile" screenName="himatsuri50" options={TwitterDesign}/>
        </TwitterFrame>
        <Footer>
            <Link href="/Gakusai"><FooterItem>　　芸工祭企画一覧　　</FooterItem></Link>
            <Link href="/HomePage"><FooterItem>芸工祭トップページへ戻る</FooterItem></Link>
        </Footer>
    </Frame>
}