import Head from 'next/head'

const App: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Anthe Todo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>App Page!</h1>
      </main>
    </div>
  )
}

export default App