import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
      <Head>
        <title>水龙头 - 网购奖励比特币平台</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

            <a href="https://app.exinearn.com/invite/ML1TZZ?source=link">
                <img src={'/exinearn_download.png'}  />
            </a>
  

    <style jsx>{`
      :global(html,body) {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      :global(body) {
        font-size: calc(10px + 1vmin);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
          'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #282c34;
        color: white;
      }

      :global(div#__next) {
        display: block;
        width: 100%;
        height: 100%;
      }


      a {
        color: pink;
        text-decoration: none;
      }
      img { height: 100%; width: auto; }
      .content {
        padding: 0 32px;
      }
      div {
        display: block;
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
)

export default Home
