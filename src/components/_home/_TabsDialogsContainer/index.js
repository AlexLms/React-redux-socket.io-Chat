import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { trackStyles, thumbStyles } from 'src/styles/base/scroll';
import styles from 'src/styles/base/colors';
import { ContentContainer } from './styles';

const TabsDialogsContainer = ({ children }) => {
  return (
    <ContentContainer>
      <Scrollbars
        autoHide
        renderTrackVertical={
          ({ style, ...props }) => <div {...props} style={{ ...style, ...trackStyles, right: '0px' }} />
        }
        renderThumbVertical={
          ({ style, ...props }) => <div {...props} style={{ ...style, ...thumbStyles, background: styles.smokePurple }} />
        }
      >
        {children}
      </Scrollbars>
    </ContentContainer>
  );
};

export default TabsDialogsContainer;
