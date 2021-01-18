import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;700&family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet"/>
      </Head>

      <main>
        <h1>Hello World!</h1>
      </main>
    </div>
  )
}

export default Home