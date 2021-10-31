import styled from "styled-components"
import Head from "next/dist/shared/lib/head"

const Container = styled.div`
    font-family: kinuta-maruminshinano-stdn, serif;
    font-weight: 400;
    font-style: normal;
    color:rgb(84,96,90);
`
const Header = styled.div`
    display: flex;
    align-items: center;
    height: 13vh;
    width: 100%; 
`
const LogoImage = styled.img`
    height: 60%;
    margin-left: 5vw;
`
const MenuFrame = styled.div`
    display: flex;
    justify-content: space-around;
    width: 60%;
    margin-left: 20vw;
`
const MenuItem = styled.a`
    color: rgb(84,96,90) ;
    text-decoration: none;
    height: 70%;
    font-size: 2vw;
`

const Top = styled.div`
    margin:0;
    padding:0;
    position:relative;
    width:100vw;
    height:30vw;
    background-attachment: fixed;
    background-repeat:no-repaet;
    background-size: cover;
    background-position: center;
    background-image: url("./production/bg.png");
`
const YearImage = styled.img`
    width:25vw;
    position: absolute;
    top:0;
    right:10vw;
`
const TopLogoImage = styled.img`
    width:25vw;
    position:absolute;
    top:23vw;
    left:10vw;
`

const About = styled.div`

`
const AboutTitle = styled.h1`
    text-align: left;
    font-size: 5vw;
    margin-left:10vw;
    margin-top: 20vw;
    margin-bottom: 4vw;
`
const AboutPhrase = styled.p`
    line-height: 5vw;
    font-size: 2vw;
    text-align: left;
    margin-left:12vw;
    margin-bottom: 6vw;
`
const Link = styled.div`
    line-height: 5vw;
    font-size: 2vw;
    text-align: left;
    margin-left:12vw;
    margin-bottom: 6vw;
    margin-top:1vh;
    margin-left:10vw;
    padding-bottom: 3vw;
`
const LinkItem = styled.a`
    color:rgb(84,96,90);
    background-color:#fff;
    border-radius: 100vh;
    border:2px solid rgb(84,96,90);
    font-size: 1.8vw;
    font-weight: 700;
    line-height: 1.5;
    position: relative;
    display: inline-block;
    padding: 1vw 2.5vw;
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
    margin-right: 5vw;
`

const Schedule = styled.div`
    margin:0;
    padding:0;
    width:100vw;
    background-attachment: fixed;
    background-repeat: no-repaet;
    background-size: cover;
    background-position: center;
    background-image: url("./production/bg_thin.png");
`
const ScheduleTitle = styled.p`
    margin-top: 15vw;
    text-align: left;
    font-size: 5vw;
    padding-top:15vw;
    margin-left:10vw;
    margin-bottom: 6vw;
`
const ScheduleDate = styled.p`
    text-align: left;
    font-size:3.5vw;
    margin-left:12vw;
    margin-top:1vw;
    margin-bottom:2vw;
`
const SchedulePhrase = styled.p`
    line-height: 6vw;
    font-size: 2vw;
    text-align: left;
    margin-left:12vw;
    margin-top:0;
`
const ScheduleSub = styled.p`
    text-align: left;
    font-size:3vw;
    margin-left:12vw;
`

const Review = styled.div`

`
const ReviewPhrase = styled.p`
    text-align: center;
    padding:5vh;
    font-size:2.3vw;
    margin-top:7vw;
`
const ReviewLink = styled.div`
    margin-top:6vw;
    margin-bottom: 6vw;
`
const Line = styled.hr`
    color: rgb(84,96,90);
    width:96%;
`
const Footer = styled.div`
    height: 10vw;
    display: flex;
    justify-content: center;
    margin-bottom: 5vw;
    margin-top:5vw;
`
const FooterItem = styled.a`
    color: rgb(84,96,90);
    text-decoration: none;
    font-size: 2vw;
    margin-right: 5%;
    margin-left: 5%;
`
export default function Panf(){
    return <Container>
        <Head>
            <title>Panf21</title>
            <link rel="icon" href="./production/logo_touka.png" />
        </Head>
        <Header>
            <LogoImage src="./production/panf21.png" />
            <MenuFrame>
                <MenuItem href="#panft">Panfってなに？</MenuItem>
                <MenuItem href="#sche">配布スケジュール</MenuItem>
                <MenuItem href="#kanso">感想を送る</MenuItem>
            </MenuFrame>
        </Header>
        <Top>
            <YearImage src="./production/year.png" />
            <TopLogoImage src="./production/rogo.png" />
        </Top>
        <About id="panft">
            <AboutTitle>Panfってなに？</AboutTitle>
            <AboutPhrase>
                芸工祭で配布するパンフレットを制作するデザイナー集団。<br />
                企画、ページデザインはもちろん、校閲や入稿まで全て自分たちの手でおこなっています。<br />

                制作にはIllustratorやPhotoshopを使っており、<br />
                年に数回、新入生向けの講習会をおこなっています。
            </AboutPhrase>
            <Link>
                <LinkItem href="https://twitter.com/panf21_geiko?s=21">Twitter &gt;</LinkItem>
                <LinkItem href="https://www.instagram.com/panf_2021/">Instagram &gt;</LinkItem>
            </Link>
        </About>
        <Schedule id="sche">
            <ScheduleTitle>配布スケジュール</ScheduleTitle>
            <ScheduleDate>11/4~7</ScheduleDate>
            <SchedulePhrase>Manly前にて配布(在校生対象)、RAIRIA大橋にて配布<br /></SchedulePhrase>
            <ScheduleSub>大橋に来られない方へ<br /></ScheduleSub>
            <SchedulePhrase>
                今年はパンフレットの郵送をします。<br />
                希望される方はGoogleフォームにて、必要事項の記入をよろしくお願いいたします。
            </SchedulePhrase>
            <Link>   
                <LinkItem href="https://docs.google.com/forms/d/e/1FAIpQLSfadf2Xpb3MxT5JO8io9H2QLtlbWKWgTkvi7-MTeNjF6GSbMQ/viewform?usp=sf_link">郵送申し込み &gt;</LinkItem>
            </Link>
        </Schedule>
        <Review id="kanso">
            <ReviewPhrase>今後のために、ご感想をいただけると幸いです。よろしくお願いいたします。<br /></ReviewPhrase>
            <ReviewLink>
                <LinkItem href="https://docs.google.com/forms/d/e/1FAIpQLScHNHftdvK099alTMGG4gXJC1St7nfZew1b4o6EUCRrGY8Bew/viewform?usp=sf_link">感想を送る &gt;</LinkItem>
            </ReviewLink>
        </Review>
        <Line />
        <Footer>
            <FooterItem href="/Gakusai">　　芸工祭企画一覧　　</FooterItem>
            <FooterItem href="/HomePage">芸工祭トップページへ戻る</FooterItem>
        </Footer>
    </Container>
}