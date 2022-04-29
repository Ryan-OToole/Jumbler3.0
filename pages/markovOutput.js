import 'semantic-ui-css/semantic.min.css';
import styles from '../css/Markov.module.css';
import { Button } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';


function markovOutput(props) {
    const [markovOutput, setMarkov] = useState('');

    function handleClick(event) {
        event.preventDefault();
        props.pullUpMarkovOutputState(markovOutput);
        setMarkov('');
    }

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
            <Button 
                primary
                onClick={handleClick}
            >
            ReJumble Me?
            </Button>
        </div>
    );
}

export default markovOutput;

