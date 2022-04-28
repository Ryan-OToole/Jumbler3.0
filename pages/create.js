import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import styles from '../css/Create.module.css';


function create(props) {
  const [createBody, setCreateBody] = useState('');
  const [createTitle, setCreateTitle] = useState('');

  function handlePullUpCreateState() {
      props.pullUpCreateState(createBody);
  }

  
  return (
    <div>
        <input 
            onChange={e => setCreateTitle(e.target.value)}
            className={styles.createTitle}
        >
        </input>
        <div>
            <textarea
            onChange={e => setCreateBody(e.target.value)}
            className={styles.createBody}
            >
            </textarea>
        </div>
        <div className={styles.button}>
            <Button 
            onClick={ () => handlePullUpCreateState() }
            >
            Jumble It
            </Button>
            <Button>Mint It</Button>
        </div>
    </div>
  );
}

export default create;

