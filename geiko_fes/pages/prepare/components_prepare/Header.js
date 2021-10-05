import Head from 'next/head'
import styled from 'styled-components'

const Logo = styled.img`
    width: 100%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
`
export default function Header(){
    return <div>
        <Head>
            <title>第18回芸工祭</title>
            <link rel="icon" href="../../prepare/favicon.ico" />
        </Head>
        <Logo src="../prepare/geiko-2021_logo_brush.png"/>
    </div>
} 