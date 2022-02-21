import styled from "styled-components"
import Head from "next/dist/shared/lib/head"
import Link from 'next/link'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const Frame = styled.div`
    font-family: serif;
    background-color: #e1e1e1;
`
const Header = styled.div`
    height: 10vw;
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
    font-size: 4.2vw;
    margin-right: 11vw;
    margin-left: 2vw;
    font-weight: bold;
`
const HeaderItem = styled.p`
    font-size: 1.0vw;
    margin: 0 6vw;
`

const TaimenImage = styled.img`
    width: 90%;
    margin-top: 1vh;
    margin-bottom: 2vh;
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
    margin-top: 0;
` 
const Text = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 5vw;
`
const TextTitle = styled.p`
    font-size: 4vw;
    font-weight: bold;
    margin-top: 3vw;
    margin-right: 15vw;
    margin-bottom: 3vw;
`
const TextPhrase = styled.p`
    font-size: 1vw;
    margin-left: 1vw;
    margin-right: 3vw;
`

const ScheduleFrame = styled.div`
    font-size: 4vw;
    margin-bottom:5vw;
`
const ScheduleText = styled.p`
    font-weight: bold;
    margin-bottom: 1vh;
    font-size: 5vw
`
const ScheduleDate = styled.p`
    margin-bottom: 1vh;
    font-size: 5vw;
`
const SchedulePhrase = styled.p`
    font-size: 4vw;
    font-weight: 500;
    text-align: left;
    margin-left: 5%;
    margin-right: 5%;
`

const FirefesImage = styled.img`
    margin-bottom: 5vw;
    width: 96vw;
`

const RowFrame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vh;
`
const ColumnFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const LinkItem = styled.p`
    font-size: 3.5vw;
    font-weight: 1000;
    line-height: 1.5;
    letter-spacing: 0.1em;
    color: black;
    margin-bottom: 2vw;
    margin-left: 5vw;
    margin-right: 5vw;
`
const ButtomItem = styled.p`
    width: 30vw;
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
    letter-spacing: 0.1em;
    color: white;
    border-radius: 100vw;
    background-color: #9f000c;
    border-bottom: 5px solid #47000c;
    margin-right: 8vw;
    margin-left: 8vw;
    margin-bottom: 0vh;
    &:hover {
        margin-top: 8px;
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
    height: 10vh;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 2vw;
    font-size: 2vw;
    margin-top: 10vh;
`
const FooterItem = styled.p`
    margin:0 4vw;
`
export default function FirefesPhone(){
    const TwitterDesign = {
        width: '100%',
        height: '50vh',
    }

    return <Frame>
        <Head>
            <title>芸工祭企画第50代火祭</title>
            <link rel="icon" href="./production/firefes.png" />
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
                <TextPhrase>
                    ソイ！ 今年度、火祭隊は50代目となりました。<br/>
                    これまで関わってくださった全ての方々に感謝いたします。<br/>
                    今年度も火祭を盛大に行いますので、お楽しみくだソイ。    
                </TextPhrase>
            </Text>
        </Top>
        <ScheduleFrame>
            <ScheduleText>開催スケジュール</ScheduleText>
            <ScheduleDate>11/7 19:00　配信開始</ScheduleDate>
            <SchedulePhrase>
                今年度は芸工祭企画の現役構成員の方のみは対面での参加が可能となります。
                それ以外の方の対面参加はお断りさせていただいておりますのでご了承下さい。
                グラウンドには18:30から待機できますので、ぜひ配信部分も生でご覧ください！
            </SchedulePhrase>
        </ScheduleFrame>
        <FirefesImage src="./production/firefes2.jpeg"/>
        <RowFrame>
            <ColumnFrame>
                <LinkItem>配信での参加はこちら</LinkItem>
                <Link href="https://www.youtube.com/channel/UCRbLmuWQc1-f-sewoofzD8w"><ButtomItem>配信リンク</ButtomItem></Link>
            </ColumnFrame>
            <ColumnFrame>
                <LinkItem>対面での参加はこちら</LinkItem>
                <Link href="https://forms.gle/8pcJ4oaTEKUVyF2c7"><ButtomItem>申請フォーム</ButtomItem></Link>
            </ColumnFrame>
        </RowFrame>
        <TwitterFrame>
            <TwitterTimelineEmbed sourceType="profile" screenName="himatsuri50" options={TwitterDesign}/>
        </TwitterFrame>
        <Footer>
            <Link href="/Gakusai"><FooterItem>　　芸工祭企画一覧　　</FooterItem></Link>
            <Link href="/HomePage"><FooterItem>芸工祭トップページへ戻る</FooterItem></Link>
        </Footer>
    </Frame>
}