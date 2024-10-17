import React, { ReactNode } from 'react';
import './screen-wrapper.css';
import SpaceEffect from './space-effect';

interface IScreenWrapper {
  children: ReactNode;
}

const ScreenWrapper = ({ children }: IScreenWrapper) => {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <SpaceEffect />
      <div className="app-computer-border">
        <div className="app-content">{children}</div>
      </div>
    </div>
  );
};

export default ScreenWrapper;
