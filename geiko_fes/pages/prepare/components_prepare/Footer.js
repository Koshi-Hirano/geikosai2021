import styled from "styled-components"

const Ul = styled.ul`
    list-style: none;
	padding-left: 0;
    color: white;
    text-align: center;
`
const Li = styled.li`
    padding-top: 20px;
`
const Link = styled.a`
    color: white;
    text-decoration-line: none;
    margin-top: 200px;
    font-family: "Yu Gothic", sans-serif;
    font-size: 1.5vh;
    font-weight: bold;
`

const Foot = styled.div`
    width: 100%;
	height: auto;
	bottom: 0;
	background-color: black;
	text-align: center;
`

const Small = styled.small`
    font-family: "Yu Gothic", sans-serif;
    font-size: 90%;
    color: white;
`

export default function Footer(){
    return <Foot>
        <Ul>
            <Li><Link href="https://twitter.com/QU_GEIKOfes_18">公式Twitter</Link></Li>
            <Li><Link href="https://www.kyushu-u.ac.jp/ja/">九大公式サイト</Link></Li>
        </Ul>
        <Small>&copy; 2021 九州大学芸工祭実行委員会</Small>
    </Foot>
}