import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import DropdownMenu from "./components/DropdownMenu";
import { darkTheme, lightTheme } from "./theme";
import { ReactComponent as BellIcon } from "./components/icons/bell.svg";
import { ReactComponent as PlusIcon } from "./components/icons/plus.svg";
import { ReactComponent as MessengerIcon } from "./components/icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./components/icons/caret.svg";
// import { ReactComponent as CogIcon } from "./components/icons/cog.svg";
// import { ReactComponent as ChevronIcon } from "./components/icons/chevron.svg";
// import { ReactComponent as ArrowIcon } from "./components/icons/arrow.svg";
// import { ReactComponent as BoltIcon } from "./components/icons/bolt.svg";
// import { useClickOutside } from "./hooks/useClickOutside";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");
  const [isOpen, setIsOpen] = useState(false);

  const onClickThemeHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
      <Navbar>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />
        <NavItem
          icon={<CaretIcon />}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setActiveMenu={setActiveMenu}
        >
          <DropdownMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            setDarkMode={setDarkMode}
          />
        </NavItem>
      </Navbar>
      <button onClick={onClickThemeHandler}>Theme</button>
    </ThemeProvider>
  );
};

export default App;
