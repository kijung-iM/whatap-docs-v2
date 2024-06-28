import React from 'react';

// 타입 정의
interface StatusProps {
  children: string;
}

const Status: React.FC<StatusProps> = ({ children }) => {
  return (
    <code className={children}>
      {children}
    </code>
  );
};

export default Status;
