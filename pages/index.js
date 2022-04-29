import Head from 'next/head';
import 'semantic-ui-css/semantic.min.css';
import styles from '../css/Markov.module.css';
import createStyles from '../css/Create.module.css';
import Markov from './markov';
import MarkovOutput from './markovOutput';
import Create from './create';
import React, { useState } from 'react';

export default function Home() {

  const [createBody, setCreateBody] = useState('');
  const [markovState, setMarkovState] = useState('');
  
  function pullUpCreateState(newText) {
    setCreateBody(newText);
  }

  function pullUpMarkovState(markovState) {
    setMarkovState(markovState)
  }

  return (
      <div>
        <div className={styles.markovs}>
          <Markov pullUpMarkovState={pullUpMarkovState} createBody={createBody}/>
          <MarkovOutput markovState={markovState}/>
        </div>
        <div>
          <Create pullUpCreateState={pullUpCreateState}/>
        </div>
      </div>
  );
}