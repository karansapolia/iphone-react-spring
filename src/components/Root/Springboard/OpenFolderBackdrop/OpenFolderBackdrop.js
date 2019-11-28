import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

import interpolate from '#root/helpers/interpolate';

const Wrapper = styled(animated.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  :hover {
    cursor: pointer;
  }
`;

const MAXIMUM_BLUR = 20;
const MINIMUM_OPEN_AMOUNT_ON_SHOW = 0.1;
const MINIMUM_OPEN_AMOUNT_ON_HIDE = 0.9;

const OpenFolderBackdrop = ({ isVisible, onClose: pushClose }) => {
  const spring = useSpring({ openAmount: isVisible ? 1 : 0 });

  const style = {
    backdropFilter: spring.openAmount.interpolate(
      openAmount => `blur(${interpolate(0, MAXIMUM_BLUR, openAmount)}px)`
    ),
    opacity: spring.openAmount,
    pointerEvents: spring.openAmount.interpolate(openAmount =>
      (isVisible && openAmount >= MINIMUM_OPEN_AMOUNT_ON_SHOW) ||
      (!isVisible && openAmount >= MINIMUM_OPEN_AMOUNT_ON_HIDE)
        ? 'auto'
        : 'none'
    ),
  };
  return <Wrapper onClick={() => pushClose()} style={style} />;
};

export default OpenFolderBackdrop;
