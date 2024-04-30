import { useState } from 'react';

type MenuToggle = [boolean, () => void];

const useMenuToggle = (initialState = false): MenuToggle => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return [isOpen, toggleMenu];
};

export default useMenuToggle;