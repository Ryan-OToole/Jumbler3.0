import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import styles from '../css/Poem.module.css';

const firstPoem = () => (
  <div>
    <h1 className={style.header}>First Poem Y'all From the dirty dirty</h1>
    <Button primary floated="right">Primary</Button>
    <Button secondary>Secondary</Button>
  </div>
)

export default firstPoem;

