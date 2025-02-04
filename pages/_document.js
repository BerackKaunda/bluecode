// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
        <Html>
            <Head>
            <link href="https://fonts.googleapis.com/css2?family=Kanit&family=Michroma&family=Orbitron:wght@500&display=swap" rel="stylesheet"></link>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
        )
    }
}

export default MyDocument