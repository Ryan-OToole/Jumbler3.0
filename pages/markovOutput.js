import 'semantic-ui-css/semantic.min.css';
import styles from '../css/Markov.module.css';
import { Button } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';


function markovOutput(props) {
    const [markovOutputState, setMarkovOutputState] = useState('');
    
    useEffect(() => setMarkovOutputState(markovOutputState + props.markovOutputTruth), [props.markovOutputTruth]);

    function handleClick() {
        props.reJumble(markovOutputState);
        props.createHash(markovOutputState);
        setMarkovOutputState('');
    }

    function handleChange(e) {
        setMarkovOutputState(e.target.value);
        props.createHash(e);
    }


    return (
        <div>
            <div>
                <textarea 
                    onChange={e => handleChange(e)}
                    className={styles.markov}
                    value={markovOutputState}
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

