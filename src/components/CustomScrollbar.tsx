
import React from 'react';
import QuantumScrollbar from './quantum-scrollbar/QuantumScrollbar';
import { useIsTouchDevice } from '@/hooks/useIsTouchDevice';

const CustomScrollbar: React.FC = () => {
  const isTouchDevice = useIsTouchDevice();
  
  if (isTouchDevice) {
    return null;
  }
  
  return <QuantumScrollbar />;
};

export default CustomScrollbar;
