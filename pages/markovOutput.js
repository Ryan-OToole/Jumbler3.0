import 'semantic-ui-css/semantic.min.css';
import styles from '../css/Markov.module.css';
import { Button } from 'semantic-ui-react';
import React, { useState } from 'react';


function markovOutput() {
    const [markovOutput, setMarkov] = useState('');

    return (
        <div>
            <div>
                <textarea 
                    onChange={e => setMarkov(e.target.value)}
                    className={styles.markov}
                >
                </textarea>
            </div>
            <Button primary>ReJumble Me?</Button>
        </div>
    );
}

export default markovOutput;

