import React from 'react';
import { ToggleHeader } from './styles.js';

const SlideToggle = (props) => (
  <ToggleHeader visible={props.visible} height={props.height} className={props.className}>
    {props.children}
  </ToggleHeader>
);

export default SlideToggle;
