import { createContext, useState } from 'react';

export const OpenMenuContext = createContext({} as any);

export const MenuContext = ({ children }: any) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <OpenMenuContext.Provider
      value={{ openMenu, dropdown, setOpenMenu, setDropdown }}
    >
      {children}
    </OpenMenuContext.Provider>
  );
};
