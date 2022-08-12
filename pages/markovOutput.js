import 'semantic-ui-css/semantic.min.css';
import styles from '../css/Markov.module.css';
import stylesOutput from '../css/MarkovOutput.module.css';
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

    function showNFTBTN() {
        console.log('markovOutputState.length', markovOutputState.length);
        if (parseInt(markovOutputState.length) >= 1 && props.match30 || props.match2X) {
            return <button className={styles.greenbutton}> Mint 3.0 NFT? </button>;
        }
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
            <button 
                className={stylesOutput.pinkbutton}
                onClick={handleClick}
            >
                Send back to Jumbler?
            </button>
            {showNFTBTN()}
        </div>
    );
}

export default markovOutput;

