import Head from 'next/head';
import 'semantic-ui-css/semantic.min.css';
import styles from '../css/Markov.module.css';
import createStyles from '../css/Create.module.css';
import Markov from './markov';
import MarkovOutput from './markovOutput';
import Create from './create';
import React, { useState, useEffect } from 'react';
import web3 from '../web3.js';
import indexStyles from '../css/Index.module.css';

export default function Home() {

  const [hash, setHash] = useState('');
  const [match30, setMatch30] = useState('');
  const [match2X, setMatch2X] = useState('');
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
    let match30 = /30/;
    let match2X = /3030/;
    // let match3X = /303030/;
    if (typeof e == 'object') {
      let value = e.target.value
      setHashInput(e.target.value);
      const hashPwd = crypto.createHash('sha256')
          .update(value)
          .digest('hex')
      setMatch30(match30.test(hashPwd));
      setMatch2X(match2X.test(hashPwd));
      setHash(hashPwd);
    }
    if (typeof e == 'string') {
      setHashInput(e);
      const hashPwd = crypto.createHash('sha256')
          .update(e)
          .digest('hex')
      setMatch30(match30.test(hashPwd));
      setMatch2X(match2X.test(hashPwd));
      setHash(hashPwd);
    }
  }

  function showHashColor() {
    let buttonColor;
    if (match2X) {
      buttonColor = "red";
    }
    else if (match30) {
      buttonColor = "yellow";
    }
    else {
      buttonColor = "white";
    }
    return <h1 style={{color: buttonColor, fontSize: "20px" }}>Your Hash: {hash}</h1>;
  }

  return (
      <div onChange={createHash} className={indexStyles.app}>
        <div className={indexStyles.container}>
          <div className={indexStyles.headercontainer}>
            <p className={indexStyles.gradienttext}>Jumbler 3.0</p>
            <p className={indexStyles.subtext}>
              Write. Poems. Whatever. Jumble it up! 30 (3.0) in the hash turns it yellow and lets you mint.
              <br />
              3030 in the hash is SUPERRARE it turns it red and lets you mint.
            </p>
          </div>
          <div className={indexStyles.footercontainer}>
            <div className={styles.markovs}>
              <Markov match30={match30} match2X={match2X} createHash={createHash} markovTruth={markovTruth} jumble={jumble}/>
              <MarkovOutput match30={match30}  createHash={createHash} reJumble={reJumble} markovOutputTruth={markovOutputTruth}/>
            </div>
            <div>
              {/* <Create createHash={createHash} sendToJumbler={sendToJumbler}/> */}
            </div>
            {/* <h2 style={{color: "white"}}>Your Input: {hashInput}</h2> */}
            {
              showHashColor()
            }
          </div>
        </div>
      </div>
  );
}