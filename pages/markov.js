import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import styles from '../css/Markov.module.css';
import { Button } from 'semantic-ui-react';


function markov(props) {
  const [markovInput, setMarkov] = useState('');

  if (props.createBody && props.createBody !== markovInput) {
    setMarkov(newString);
  }

  function setMarkovDepending() {
    
  }

  // setMarkov(props.createBody);


  // if (props.createBody) {
  //   setMarkov(props.createBody);
  //   console.log('props.createBody**', props.createBody);
  // }

  // i need to make props.createBody update the state
  // when it comes in from index.js

  return (
    <div>
      <div>
        <textarea 
          className={styles.markov}
          onChange={e => setMarkov(e.target.value)}
          value={props.createBody}
        >
        </textarea>
      </div>
      <Button primary>Jumble Me?</Button>
    </div>
  );
}

export default markov;

