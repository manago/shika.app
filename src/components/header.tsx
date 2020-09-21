import Head from 'next/head'
import styles from '../styles/header.module.css'

const ogImageUrl = '../../public/eltopo.jpeg'

export default ({ titlePre = '' }) => {
  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} SHiKA:app</title>
        <meta name="description" content="SHiKA:appの試行錯誤BLOG" />
        <meta name="og:title" content="SHiKA:app" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@manago" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <a href="/">
        <h1>SHiKA:app</h1>
      </a>
    </header>
  )
}
