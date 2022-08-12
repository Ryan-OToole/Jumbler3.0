import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import styles from '../css/Create.module.css';

function create(props) {
  const [createState, setCreateState] = useState('');

  function sendToJumbler() {
      props.sendToJumbler(createState);
      setCreateState('');
  }
  
  function handleChange(e) {
    setCreateState(e.target.value);
    props.createHash(e);
  }
  
  return (
    <div>
        <div>
            <textarea
            onChange={e => handleChange(e)}
            className={styles.createInput}
            value={createState}
            >
            </textarea>
        </div>
        <div>
            <Button 
            onClick={ () => sendToJumbler() }
            >
            Send to Jumbler
            </Button>
        </div>
    </div>
  );
}

export default create;

