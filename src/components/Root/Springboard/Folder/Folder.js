import React, { useRef } from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components';

import useInterpolatedStyles from './_useInterpolatedStyles';
import facebookLogo from './fb.png';
import whatsappLogo from './whatsapp.png';
import instagramLogo from './instagram.png';

const AppIcon = styled(animated.img)`
  border-radius: 0.25rem;
  height: auto;
  width: 100%;
`;

const FolderIcons = styled(animated.div)`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 1rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const FolderName = styled.span`
  color: white;
  margin-top: 0.5rem;
`;

const OpenedFolderName = styled(animated.span)`
  color: white;
  font-size: 2.5rem;
  pointer-events: none;
  position: absolute;
  transform: translate(-50%);
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column-reverse nowrap;
  user-select: none;

  :hover {
    cursor: pointer;
  }
`;

const Folder = ({ folder, onOpen: pushOpen, parentRef, isOpened }) => {
  const folderIconsRef = useRef();

  const {
    appIconStyle,
    folderIconsStyle,
    openedFolderNameStyle,
  } = useInterpolatedStyles({
    folderIconsRef,
    parentRef,
    isOpened,
  });

  return (
    <Wrapper onClick={() => pushOpen()}>
      <FolderName>{folder.name}</FolderName>
      <OpenedFolderName style={openedFolderNameStyle}>
        {folder.name}
      </OpenedFolderName>
      <FolderIcons ref={folderIconsRef} style={folderIconsStyle}>
        <AppIcon src={facebookLogo} style={appIconStyle} />
        <AppIcon src={whatsappLogo} style={appIconStyle} />
        <AppIcon src={instagramLogo} style={appIconStyle} />
      </FolderIcons>
    </Wrapper>
  );
};

export default Folder;
