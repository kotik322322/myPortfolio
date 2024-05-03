import React from 'react'

interface BurgerMenuButtonProps {
    toggleMenu: () => void;
    isOpen: boolean
}

const BurgerMenuButton = ({toggleMenu, isOpen}:BurgerMenuButtonProps ) => {
  return (
    <button
        className="flex flex-col justify-center items-center lg:hidden"
        onClick={toggleMenu as () => void}>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        />
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        />
      </button>
  )
}

export default BurgerMenuButton