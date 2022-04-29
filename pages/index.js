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
  
  function pullUpCreateState(newText) {
    setCreateBody(newText);

  }

  return (
      <div>
        <div className={styles.markovs}>
          <Markov createBody={createBody}/>
          <MarkovOutput />
        </div>
        <div>
          <Create pullUpCreateState={pullUpCreateState}/>
        </div>
      </div>
  );
}