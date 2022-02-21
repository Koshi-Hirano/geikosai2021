import Header from './components/Header'
import styled from 'styled-components'
import Link from 'next/link'

const Frame = styled.div`
    display: flex;
`
const Container = styled.div`
    width: 82vw;
    display: flex;
    flex-direction: column;
`
const Visual = styled.img`
    width: 70%;
    margin-top: 5vh;
    margin-left: auto;
    margin-right: auto;
`
const Whatis = styled.img`
    width: 60%;
    margin-top: 18vh;
    margin-left: auto;
    margin-right: auto;
`
const Phrase = styled.p`
    text-align: left;
    font-size: 1.7vw;
    font-weight: 600;
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
`
const Date = styled.img`
    width: 40%;
    margin-top: 10vh;
    margin-left: 45%;
    margin-bottom: 5vh;
`
const DatePhrase = styled.p`
    font-size: 2.5vw;
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 1vh;
    margin-left: 20%;
`
const YoutubeBottom = styled.img`
    width: 30%;
    margin-left: 45%;
    margin-top: 5vh;
`
const Group = styled.img`
    width: 60%;
    margin-top: 18vh;
    margin-left: auto;
    margin-right: auto;
`
const GroupRowFrame = styled.div`
    display: flex;
    margin-top: 5vh;
    margin-left: auto;
    margin-right: auto;
`
const GroupColumnFrame = styled.div`
    diplay: flex;
    flex-direction: column;
    text-align: left;
`
const GroupItem = styled.p`
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
    font-size: 1.5vw;
    font-weight: 600;
    margin-left: 5vw;
`
const Phrase2 = styled.p`
    font-size: 2vw;
    font-weight: 600;
    margin-top: 10vh;
`
const TwitterBotton = styled.img`
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5vh;
    margin-bottom: 10vh;
`
export default function FlyingPanPC(){
    return <Frame>
        <Header />
        <Container>
            <Visual src="./production/flyingpan_visual.png" /> 
            <Whatis src="./production/flyingpan1.png" />
            <Phrase>
                フライパンライブとは、フライパン広場の野外ステージで融資団体が<br/>
                さまざまなパフォーマンスを披露する実行委員会主催のイベントです。<br/>
            </Phrase>
            <Date src="./production/flyingpan2.png" />
            <DatePhrase>1日目　11/6(土) 14:00~ (予定)</DatePhrase>
            <DatePhrase>2日目　11/7(日) 12:00~ (予定)</DatePhrase>
            <Link href="https://youtu.be/a5Bvcs-O0n4"><YoutubeBottom src="./production/flyingpan3.png" /></Link>
            <Group src="./production/flyingpan4.png" />
            <GroupRowFrame>
                <GroupColumnFrame>
                    <GroupItem>・ぬー</GroupItem>
                    <GroupItem>・ユニゾンスクエアガーデン</GroupItem>
                    <GroupItem>・イトザカナクセクション</GroupItem>
                    <GroupItem>・KIDうで自慢</GroupItem>
                    <GroupItem>・片平里奈のコピバン</GroupItem>
                    <GroupItem>・アジカンのコピバン</GroupItem>
                </GroupColumnFrame>
                <GroupColumnFrame>
                    <GroupItem>・フライパンカバラ’21</GroupItem>
                    <GroupItem>・SUNSAGE SANGE</GroupItem>
                    <GroupItem>・PANAMA</GroupItem>
                    <GroupItem>・完全変態</GroupItem>
                    <GroupItem>・ガガガ―ガ・ガ―ガガ</GroupItem>
                    <GroupItem>・G-PENTAGON</GroupItem>
                </GroupColumnFrame>
            </GroupRowFrame>
            <Phrase2>
                詳細やタイムスケジュールはフライパンライブ<br/>
                公式Twitterをご覧ください。
            </Phrase2>
            <Link href="https://twitter.com/Fryingpanlive21"><TwitterBotton src="./production/flyingpan5.png" /></Link>
        </Container>        
    </Frame>
}