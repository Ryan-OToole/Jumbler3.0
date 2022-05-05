import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import styles from '../css/Create.module.css';


function create(props) {
  const [createInput, setCreateInput] = useState('');

  function handlePullUpCreateState() {
      props.pullUpCreateState(createInput);
      setCreateInput('');
  }

  
  return (
    <div>
        <div>
            <textarea
            onChange={e => setCreateInput(e.target.value)}
            className={styles.createInput}
            value={createInput}
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

