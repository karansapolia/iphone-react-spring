import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import Folder from './Folder';
import OpenFolderBackdrop from './OpenFolderBackdrop';
import ios11DefaultWallpaper from './ios-11-default-wallpaper.jpg';

const Wrapper = styled.div`
  background-image: url(${ios11DefaultWallpaper});
  background-position: center;
  background-size: auto 100%;
  box-sizing: border-box;
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 1.25rem 1rem;
  grid-template-columns: repeat(4, 1fr);
  padding: 2rem;
  height: 60rem;
  width: 30rem;
  position: relative;
`;

const Springboard = ({ folders }) => {
  const wrapperRef = useRef();
  const [openedFolderId, setOpenedFolderId] = useState(null);

  return (
    <Wrapper ref={wrapperRef}>
      <OpenFolderBackdrop
        isVisible={openedFolderId !== null}
        onClose={() => setOpenedFolderId(null)}
      />
      {folders.map(folder => (
        <Folder
          folder={folder}
          isOpened={folder.id === openedFolderId}
          key={folder.id}
          onOpen={() => setOpenedFolderId(folder.id)}
          parentRef={wrapperRef}
        >
          Folder
        </Folder>
      ))}
    </Wrapper>
  );
};

export default Springboard;
