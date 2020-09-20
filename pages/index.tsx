import Head from 'next/head'
import styled from '@emotion/styled'
import styles from '../styles/Home.module.css'

const Container = styled.div``
const Main = styled.main``
const BlogTitle = styled.h1``

const title: string = 'Testing Next JS and Typescript'
export default function Home() {
  return (
    <Container className={styles.container}>
      <Head>
        <title>Strapi next typescript graphql</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main className={styles.main}>
        <BlogTitle className={styles.title}>{title}</BlogTitle>
      </Main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          JAJAL Typescript
        </a>
      </footer>
    </Container>
  )
}
