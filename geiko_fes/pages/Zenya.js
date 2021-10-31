import styled from "styled-components"
import Head from "next/dist/shared/lib/head"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0; 
`
const Visual = styled.img`
    width: 80%;
`
const Frame = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    margin-top: 10vh;
`
const Image = styled.img`
    width: 20%;
`
const Title = styled.p`
    font-size: 3vw;
`
const Phrase = styled.p`
    width: 100%;
    text-align: left;
    margin-left: 30%;
    font-size: 1.9vw;
`
export default function Zenya(){
    return <Container>
        <Head>
            <title>zenya</title>
            <link rel="icon" href="./production/logo_touka.png" />
        </Head>
        <Visual src="./production/zenya_visual.png" />
        <Frame>
            <Image src="./production/zenya_triangle1.png" />
            <Title>テーマ</Title>
        </Frame>
        <Phrase>
            私たちzenyaは、芸工祭の前夜に、自分たちで1から作り上げた最高のライブを<br />
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
    </Container>
}