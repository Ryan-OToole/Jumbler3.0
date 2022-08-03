import Head from 'next/head';
import 'semantic-ui-css/semantic.min.css';
import styles from '../css/Markov.module.css';
import createStyles from '../css/Create.module.css';
import Markov from './markov';
import MarkovOutput from './markovOutput';
import Create from './create';
import React, { useState, useEffect } from 'react';
import web3 from '../web3.js';

export default function Home() {

  const [hash, setHash] = useState('');
  const [markovTruth, setMarkovTruth] = useState('');
  const [markovOutputTruth, setMarkovOutputTruth] = useState('');
  const [hashInput, setHashInput] = useState('');
  const crypto = require('crypto');

      // useEffect(() => setCreateTruth(createTruth + props.createState), [props.createState]);
      // useEffect(() => setMarkovTruth(markovTruth + props.markovOutputTruth), [props.markovOutputTruth]);
      // useEffect(() => setMarkovOutputTruth(markovOutputTruth + props.markovState), [props.markovState]);

  // web3.eth.getAccounts()
  //   .then(console.log);
  
  function sendToJumbler(state) {
    setMarkovTruth(state);
  }

  function jumble(state) {
    setMarkovOutputTruth(state);
  }

  function reJumble(state) {
    setMarkovTruth(state);
  }

  function createHash(e) {
    if (typeof e == 'object') {
      setHashInput(e.target.value);
      const hashPwd = crypto.createHash('sha256')
          .update(e.target.value)
          .digest('hex')
      console.log("Hash Value: " + hashPwd);
      setHash(hashPwd);
    }
    if (typeof e == 'string') {
      setHashInput(e);
      const hashPwd = crypto.createHash('sha256')
          .update(e)
          .digest('hex')
      console.log("Hash Value: " + hashPwd);
      setHash(hashPwd);
    }
  }

  return (
      <div onChange={createHash}>
        <div className={styles.markovs}>
          <Markov createHash={createHash} markovTruth={markovTruth} jumble={jumble}/>
          <MarkovOutput createHash={createHash} reJumble={reJumble} markovOutputTruth={markovOutputTruth}/>
        </div>
        <div>
          <Create createHash={createHash} sendToJumbler={sendToJumbler}/>
        </div>
        <h2>{hashInput}</h2>
        <h1>{hash}</h1>
      </div>
  );
}