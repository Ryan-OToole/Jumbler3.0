import Head from 'next/head';
import 'semantic-ui-css/semantic.min.css';
import styles from '../css/Poem.module.css';

export default function Home() {
  return (
      <div>
        <input className={styles.markov}></input>
      </div>
  )
}