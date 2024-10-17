import React, { ReactNode } from 'react';
import './screen-wrapper.css';

interface IScreenWrapper {
  children: ReactNode;
}

const ScreenWrapper = ({ children }: IScreenWrapper) => {
  return (
    <div className="app-screen">
      <div className="app-computer-border">
        <div className="app-content">{children}</div>
      </div>
    </div>
  );
};

export default ScreenWrapper;
