import styled from "styled-components"

const Frame = styled.div`
    position: absolute;
	width: 100%;
	height: 20%;
	bottom: 0;
	background-color: #4B2C14;
	text-align: center;
    padding: 0;
`
const Ul = styled.ul`
    list-style: none;
    padding-left: 0;
    text-align: center;
    color: white;
	margin-top: 2vh;
	margin-bottom: 2vh;
`
const List = styled.li`
    padding-top: 1vh;
    padding-bottom: 1vh;
`
const Link = styled.a`
    color: white;
    text-decoration-line: none;
    font-family: 'Kaisei Opti', serif;
    font-size: 1.5vmax;
    font-weight: bold;
    padding-top: 20px;
`
const Copyright = styled.small`
    font-family: "Hina Mincho", serif;
    font-size: 80%;
    color: white;
`
export default function Footer(){
    return <Frame>
        <Ul>
            <List><Link href="https://twitter.com/QU_GEIKOfes_18">公式Twitter</Link></List>
            <List><Link href="https://www.kyushu-u.ac.jp/ja/">九大公式サイト</Link></List>
        </Ul>
        <Copyright>&copy; 2021 九州大学芸工祭実行委員会</Copyright>
    </Frame>
}