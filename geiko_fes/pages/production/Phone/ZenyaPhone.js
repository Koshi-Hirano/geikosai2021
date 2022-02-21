import styled from "styled-components"
import Head from "next/dist/shared/lib/head"
import Link from "next/link"

const Container = styled.div`
    width: 100vw;
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
`
const Visual = styled.img`
    width: 80%;
`
const Frame = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    margin-top: 5vh;
    margin-left: auto;
    margin-right: auto;
`
const Image = styled.img`
    width: 30%;
`
const Title = styled.p`
    font-size: 5vw;
    font-weight: 600;
`
const Phrase = styled.p`
    text-align: left;
    font-size: 4vw;
    font-weight: 500;
    margin-left: 15%;
    margin-right: 12%;
`
const LinkFrame1 = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
`
const LinkItem1 = styled.img`
    width: 70%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5vh;
`
const LinkHidden = styled.img`
    width: 70%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5vh;
    opacity: 0.3;
`
const LinkFrame2 = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
`
const LinkItem2 = styled.img`
    width: 40%;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 8vh;
`
export default function ZenyaPhone(){
    return <Container>
        <Visual src="./production/zenya_visual.png" />
        <Frame>
            <Image src="./production/zenya_triangle1.png" />
            <Title>テーマ</Title>
        </Frame>
        <Phrase>
            私たちzenyaは、芸工祭の前夜に、自分たちで1から作り上げた最高のライブを
            お届けする集団です。先陣切って盛り上げていくので、ぜひご覧ください！！！
        </Phrase>
        <Frame>
            <Image src="./production/zenya_triangle2.png" />
            <Title>スケジュール</Title>
        </Frame>
        <Phrase>
            11.5(Fri)　16:00～<br />
            @online(Youtube)
        </Phrase>
        <Frame>
            <Image src="./production/zenya_triangle3.png" />
            <Title>参加方法</Title>
        </Frame>
        <Phrase>
            参加は無料です。<br />
            時間になりましたら以下のチャンネルにて配信を開始いたします。
        </Phrase>
        <LinkFrame1>
            <Link href="https://m.youtube.com/channel/UCBeKStm--rc4mp7PcwCpOUw"><LinkItem1 src="./production/zenya_youtube.png" /></Link>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe0j5ZbcikDJU5SjpwJZYLhy8kJCwiZw6RYsBQqDJ_lzAQnUA/viewform?usp=sf_link"><LinkItem1 src="./production/zenya_review.png" /></Link>
        </LinkFrame1>
        <LinkFrame2>
            <Link href="/Gakusai"><LinkItem2 src="./production/zenya_menu.png" /></Link>
            <Link href="/"><LinkItem2 src="./production/zenya_top.png" /></Link>
        </LinkFrame2>
    </Container>
}