import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'
import Link from 'next/dist/client/link'

const Frame = styled.div`
    width: 100vw;
    font-family: 'Helvetica Neue','Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
`
const Geikochan = styled.img`
    width: 80%;
    margin-top: 5vh;
    margin-left: auto;
    margin-right: auto;
`
const Title = styled.h2`
    color: #633701;
`
const Phrase = styled.p`
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    font-size: 2.6vw;
    font-weight: 500;
`
const LogoLeft = styled.div`
    display: flex;
    width: 95%;
    margin-right: 5%;
    margin-top: 5vh;
    margin-bottom: 5vh;
`
const LogoImageLeftFrame = styled.div`
    width: 120%;
    height: 20vh;
    margin-left: 5vw;
    display: flex;
    align-items: center;
    justify-content: center;
`
const LogoImageLeft = styled.img`
    width: 90%;
    transition: 0.5s;
    &:hover {
        width: 100%;
    }
`
const LogoImageLeftHidden = styled.img`
    width: 90%;
    opacity: 0.3;
`
const LogoFrameLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 3vw;
`
const LogoRight = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 95%;
    margin-left: 5%;;
    margin-top: 5vh;
    margin-bottom: 5vh;
`
const LogoImageRightFrame = styled.div`
    width: 120%;
    height: 20vh;
    margin-right: 5vw;
    display: flex;
    align-items: center;
    justify-content: center;
`
const LogoImageRight = styled.img`
    width: 80%;
    transition: 0.5s;
    &:hover {
        width: 100%;
    }
`
const LogoImageRightHidden = styled.img`
    width: 80%;
    margin-right: 5vw;
    opacity: 0.3;
`
const LogoFrameRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 3vw;
`
const LogoTitle = styled.p`
    font-size: 6vw;
    font-weight: bold;
    margin-bottom: 0;
`
const LogoPhrase = styled.p`
    font-size: 2.4vw;
    letter-spacing: 0.05rem;
    font-weight: 500;
    margin-top: 5%;
    text-align: left;
`
const Sub = styled.div`
    margin-top: 10vh;
    margin-bottom: 5vh;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    display: flex;
`
const SubImage = styled.img`
    height: 5vh;
    transition: 1s;
    &:hover{
        transform: rotateX( 360deg );
    }
`
const Back = styled.img`
    width 20%;
    margin-top: 10vh;
    margin-bottom: 5vh;
    margin-left: auto;
    margin-right: auto;
`
const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
};
export default function GakusaiPhone(){
    const GeikoRandom = () => {
        const random = Math.floor( Math.random() * 3 );
        if(random == 0){
            return <Geikochan src="./production/geiko-1.png" />
        }
        else if(random == 1){
            return <Geikochan src="./production/geiko-2.png" />
        }
        else if(random == 2){
            return <Geikochan src="./production/geiko-3.png" />
        }
    }
    
    return <Frame>
        <Header />
        {GeikoRandom()}
        <Sub><SubImage src="./production/content.png" /></Sub>
        <Title>学祭企画</Title>
        <Phrase>芸工祭では、様々な企画がイベントを開催します。舞台、音響、衣装、照明など全てを学生が一から作り上げ、芸工祭を彩ります。</Phrase>
        <LogoLeft>
            <Link href="/Zenya"><LogoImageLeftFrame><LogoImageLeft src="./production/zenya.png"/></LogoImageLeftFrame></Link>
            <LogoFrameLeft>
                <LogoTitle>zenya</LogoTitle>
                <LogoPhrase>芸工祭前夜にライブを開催する団体です。ステージに立つ演者はもちろん、照明や映像、音効など全てを自分たちの手で作り上げます。</LogoPhrase>
            </LogoFrameLeft>
        </LogoLeft>
        <LogoRight>
            <Link href="http://project-of-2ken.com/21withyou/"><LogoImageRightFrame ><LogoImageRight src="./production/2ken.png"/></LogoImageRightFrame></Link>
            <LogoFrameRight>
                <LogoTitle>2研企画</LogoTitle>
                <LogoPhrase>音や照明、映像などを組み合わせ、インスタレーションと呼ばれる体験型イベントを提供する団体です。</LogoPhrase>
            </LogoFrameRight>
        </LogoRight>
        <LogoLeft>
            <Link href="/CBA"><LogoImageLeftFrame><LogoImageLeft src="./production/cbalogo.png"/></LogoImageLeftFrame></Link>
            <LogoFrameLeft>
                <LogoTitle>CBA project</LogoTitle>
                <LogoPhrase>ステージ、背景映像、音効、照明など、全てを０から作り上げ、既存の枠に囚われないファッションエンターテイメントを繰り広げます。</LogoPhrase>
            </LogoFrameLeft>
        </LogoLeft>
        <LogoRight>
            <Link href="https://3kenfunsui.github.io/2021/"><LogoImageRightFrame ><LogoImageRight src="./production/3ken.png"/></LogoImageRightFrame></Link>
            <LogoFrameRight>
                <LogoTitle>噴水企画(3研)</LogoTitle>
                <LogoPhrase>噴水型マルチパフォーマー集団です。噴水周りにステージを組み、そこでイベントを行います。今年度はヒーローショーを実施します。</LogoPhrase>
            </LogoFrameRight>
        </LogoRight>
        <LogoLeft>
            <Link href="/Firefes"><LogoImageLeftFrame><LogoImageLeft src="./production/firefes.png"/></LogoImageLeftFrame></Link>
            <LogoFrameLeft>
                <LogoTitle>火祭</LogoTitle>
                <LogoPhrase>芸工祭全ての終わりにみんなで炎柱を囲み、自らが作った麻生袋を身にまとい、代々受け継がれた踊りを踊ります。今年度で50年目を迎えます。</LogoPhrase>
            </LogoFrameLeft>
        </LogoLeft>
        <LogoRight>
            <Link href="/Panf"><LogoImageRightFrame><LogoImageRight src="./production/Panf.png"/></LogoImageRightFrame></Link>
            <LogoFrameRight>
                <LogoTitle>Panf</LogoTitle>
                <LogoPhrase>芸工祭で配布するパンフレットの制作を行うデザイナー集団です。制作は全て自分たちで行い、趣向を凝らしたパンフレットを作ります。</LogoPhrase>
            </LogoFrameRight>
        </LogoRight>
        <LogoLeft>
            <Link href="/Workshop"><LogoImageLeftFrame><LogoImageLeft src="./production/5ken.png"/></LogoImageLeftFrame></Link>
            <LogoFrameLeft>
                <LogoTitle>5研企画</LogoTitle>
                <LogoPhrase>芸工祭の企画・運営を行う実行委員会です。今年度は、野外ライブ・ワークショップ企画も実施します。</LogoPhrase>
            </LogoFrameLeft>
        </LogoLeft>
        <LogoRight>
            <Link href="/Nullken"><LogoImageRightFrame><LogoImageRight src="./production/nullkenlogo.png"/></LogoImageRightFrame></Link>
            <LogoFrameRight>
                <LogoTitle>未定研</LogoTitle>
                <LogoPhrase>未定研、またの名をnull研です。学祭プレ企画として始動しました。初年度となる今回は短編アニメーション映画を制作します。</LogoPhrase>
            </LogoFrameRight>
        </LogoRight>
        <Back src="./production/tothetop.png" onClick={returnTop} />
        <Footer />
    </Frame>
}