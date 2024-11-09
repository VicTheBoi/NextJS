import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from '../components/Counter';
import GitHub from '../components/GitHub';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Victor Becker welcomes <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <Counter name={"Chaos"} mult={1} size={2}/>
      <Counter name={"Big E"} mult={2} size={0.5}/>

      <hr 
        style={{
          width: "80%",
          marginTop: "lem",
        }}
      />
      <GitHub />
      <hr 
        style={{
          width: "80%",
          marginTop: "lem",
        }}
      />
      <p>Check out this <Link href="/store">Scam Store</Link></p>
      <hr 
        style={{
          width: "80%",
          marginTop: "lem",
        }}
      />
    </div>
  );
}
