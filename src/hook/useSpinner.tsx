import { useState } from 'react'

export const useSpinner = () => {
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const handleMouseDown = () => {
    setIsSpinning(true);
  };

  const handleMouseUp = () => {
    setIsSpinning(false);
  };
  return {
    isSpinning, handleMouseDown, handleMouseUp
  }
}

