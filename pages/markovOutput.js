import 'semantic-ui-css/semantic.min.css';
import styles from '../css/Markov.module.css';
import { Button } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';


function markovOutput(props) {
    const [markovOutput, setMarkov] = useState('');

    useEffect(() => setMarkov(markovOutput + props.markovState), [props.markovState]);

    return (
        <div>
            <div>
                <textarea 
                    onChange={e => setMarkov(e.target.value)}
                    className={styles.markov}
                    value={markovOutput}
                >
                </textarea>
            </div>
            <Button primary>ReJumble Me?</Button>
        </div>
    );
}

export default markovOutput;

