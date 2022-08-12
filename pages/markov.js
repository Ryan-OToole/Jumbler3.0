import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import styles from '../css/Markov.module.css';
import { Button } from 'semantic-ui-react';
// import { ethers } from 'ethers';
// import Jumbler from '../src/artifacts/contracts/Jumbler.sol/Jumbler.json';

// const jumblerAddress = '0xdfA652ba46f72a877500fDaC5b6E212212d53549';

function markov(props) {
  const [markovState, setMarkov] = useState('');

  useEffect(() => setMarkov(markovState + props.markovTruth), [props.markovTruth]);
  // so i have props.markovState here getting pulled in from markovOutput
  // I need to integrate this with the data coming in from create
  // figure out yer data flow

  function handleClick() {
    let markov = new MarkovGenerator(markovState, 5);
    let markovOutputTruthToBe = markov.generateText(250);
    props.jumble(markovOutputTruthToBe);
    props.createHash(markovOutputTruthToBe);
    setMarkov('');
    // if (typeof window.ethereum !== 'undefined') {
    //   await this.requestAccount();
    //   const provider = new ethers.providers.Web3Provider(window.ethereum);
    //   const signer = provider.getSigner();
    //   const contract = new ethers.Contract(jumblerAddress, Jumbler.abi, signer);
    //   const transaction = await contract.setPoem(markovState);
    //   await transaction.wait();
    //   const data = await contract.showPoem();
    // }
  }

  function handleChange(e) {
    setMarkov(e.target.value);
    props.createHash(e);
  }
  
  function MarkovGenerator(sourceText, order) {

    this.sourceText = sourceText;
    this.order = order;
  
    this._setupFrequencies();
  
  }
  
  MarkovGenerator.prototype = {
  
  _setupFrequencies: function() {
  
      this.frequencies = {};
  
      // for each substring of length <order>,
      // create an array of characters that can follow it
      for (var i = 0; i < this.sourceText.length - (this.order - 1); i++) {
          var chunk = this.sourceText.substr(i, this.order);
          if (!this.frequencies.hasOwnProperty(chunk)) {
              this.frequencies[chunk] = [];
          }
          var follower = this.sourceText.substr(i + this.order, 1);
          this.frequencies[chunk].push(follower);
      }
  
  },
  
    _getRandomChar: function(chunk) {
  
        if (!this.frequencies.hasOwnProperty(chunk)) {
            return '';
        }
        var followers = this.frequencies[chunk];
        var randIndex = Math.floor(Math.random() * followers.length);
        return followers[randIndex];
  
    },
  
    _getRandomChunk: function() {
  
        var randIndex = Math.floor(Math.random() * this.sourceText.length);
        return this.sourceText.substr(randIndex, this.order);
  
    },
  
    generateText: function(length) {
  
        if (this.sourceText.length <= this.order) {
            return '';
        }
  
        var text = this._getRandomChunk();
  
        // take the last <order> characters from the generated string,
        // select one of its possible followers, and append it
        for (var i = this.order; i < length; i++) {
            var currentChunk = text.substr(text.length - this.order);
            var newChar = this._getRandomChar(currentChunk);
  
            if (newChar !== '') { // the last chunk of the source has no follower
                text += newChar;
            } else {
                text += this._getRandomChunk();
            }
        }
  
        return text;
  
    }
  }

  function showNFTBTN() {
    if (parseInt(markovState.length) >= 1 && props.match30 || props.match2X) {
        return <button className={styles.pinkbutton}> Mint 3.0 NFT?</button>;
    }
}

  return (
    <div>
      <div>
        <textarea 
          className={styles.markov}
          onChange={e => handleChange(e)}
          value={markovState}
        >
        </textarea>
      </div>
      <button
        onClick={handleClick}
        className={styles.greenbutton}
      >
      Jumble Me?
      </button>
      {
        showNFTBTN()
      }
    </div>
  );
}

export default markov;

