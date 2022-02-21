import styled from "styled-components"
import Link from "next/link"
import Header from "./components/Header"
import Footer from "./components/Footer"

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const Visual = styled.img`
    width: 80%;
    margin-top: 5vh;
    margin-left: auto;
    margin-right: auto;
`
const SubTitle = styled.img`
    width: 40%;
    margin-left: 15%;
    margin-top: 15%;
    margin-bottom: 5%; 
`
const Phrase = styled.p`
    font-size: 3.5vw;
    text-align: left;
    line-height: 1.9;
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
    font-weight: 550;
`
const PhraseContainer = styled.div`
    width: 70%;
    margin-left: auto;
    margin-right: auto;
`
const SchduleTitle = styled.p`
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
    font-size: 5vw;
    font-weight: 550;
    margin-top: 1%;
    margin-bottom: 1%;
`
const ScheduleSub = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5%;
    margin-bottom: 0;
`
const Circle = styled.img`
    width: 5%;
    margin-left: 15%;
    margin-right: 1%;
`
const ScheduleSubTitle = styled.p`
    font-size: 5.0vw;
    text-align: left;
    line-height: 1.9;
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
    font-weight: 600;
    color: #2b79ab;
`
const SchedulePhrase = styled.p`
    font-size: 4vw;
    text-align: left;
    margin-top: 0;
    line-height: 1.9;
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
    font-weight: 550;
`
const YoutubeBotton = styled.img`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
`
const QuestionaryPhrase = styled.p`
    font-size: 4vw;
    text-align: left;
    margin-top: 0;
    line-height: 1.9;
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
    font-weight: 550;
`
const QuestionaryBotton = styled.img`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    margin-bottom: 20vh;
`

export default function Nullken(){
    return <div>
        <Container>
            <Header />
            <Visual src="./production/nullken_visual.png" />
            <SubTitle src="./production/nullken3.png" />
            <PhraseContainer>
                <Phrase>
                    学祭プレ企画の未定研です。今年のテーマは「IFの世界」短編アニメーション映画を制作しました。<br/>
                    --------------------------------------------------------<br/>
                    「Drive and Drop」<br/>
                    ーある日、中学生のみどりは熱が出て、学校をオンライン参加する。<br/>
                    ー工作員である工藤は、新しく建造される宇宙エレベーターの完成を阻止するべく、極秘の破壊任務を任されていた。<br/>
                    ー「宇宙と地球、どっちが高いか」そんなとりとめのない話をする、工事現場の作業員たちは、
                    新人の大野とともにいつも通り事務所へと向かうためエレベーターに乗り込んだ。<br/>
                    これは ありきたりな誰かを 日常からはみ出させる物語。 そして、それでも何も変わらないかもしれない物語。<br/>
                    ーところでもう昼食べた？<br/>
                    --------------------------------------------------------<br/>
                    未定研の幕開けとなる映像作品をお楽しみください。
                </Phrase>
            </PhraseContainer>
            <SubTitle src="./production/nullken2.png" />
            <SchduleTitle>11/7(Sun.) 11:00~</SchduleTitle>
            <SchduleTitle>Youtubeにてプレミア公開</SchduleTitle>
            <ScheduleSub>
                <Circle src="./production/circle.PNG" /><ScheduleSubTitle>閲覧方法</ScheduleSubTitle>
            </ScheduleSub>
            <PhraseContainer>
                <SchedulePhrase>
                    閲覧は無料です。時間になりましたら以下からご覧いただけます。<br/>
                    以降いつでも何度でも閲覧可能ですので、都合のつかない方やもう一度見たい方はぜひ存分
                    にお楽しみください。
                </SchedulePhrase>
            </PhraseContainer>
            <Link href="https://www.youtube.com/channel/UCFAbCidqzQv-HGjdqgs8Fow"><YoutubeBotton src="./production/nullken_youtube.png" /></Link>
            <SubTitle src="./production/nullken1.png" />
            <PhraseContainer>
                <QuestionaryPhrase>
                    アンケートにご協力ください。<br/>
                    アンケートにご協力頂いた方の中から抽選で限定ポスターカードを発送させていただきます。
                </QuestionaryPhrase>
            </PhraseContainer>
            <Link href="https://forms.gle/6C4pj6zJAHvmjjm68"><QuestionaryBotton src="./production/nullken_anke.png" /></Link>
            <Footer />
        </Container>
    </div>
}