import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
       <div class="main">
            <a href="https://app.exinearn.com/invite/ML1TZZ?source=link">
                <img src={'/exinearn_download.png'} class="download_pic" />
            </a>
        </div>

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
