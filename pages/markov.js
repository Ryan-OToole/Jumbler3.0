import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import styles from '../css/Markov.module.css';
import { Button } from 'semantic-ui-react';


function markov(props) {
  const [markovInput, setMarkov] = useState('');

  useEffect(() => setMarkov(markovInput + props.createBody), [props.createBody]);

  return (
    <div>
      <div>
        <textarea 
          className={styles.markov}
          onChange={e => setMarkov(e.target.value)}
          value={markovInput}
        >
        </textarea>
      </div>
      <Button primary>Jumble Me?</Button>
    </div>
  );
}

export default markov;

