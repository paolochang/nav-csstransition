import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import DropdownMenu from "./components/DropdownMenu";
import DropdownItem from "./components/DropdownItem";
import { darkTheme, lightTheme } from "./theme";
import { ReactComponent as BellIcon } from "./components/icons/bell.svg";
import { ReactComponent as PlusIcon } from "./components/icons/plus.svg";
import { ReactComponent as MessengerIcon } from "./components/icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./components/icons/caret.svg";
import { ReactComponent as ArrowIcon } from "./components/icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./components/icons/bolt.svg";

const App: React.FC = () => {
  const [darkMode, setdarkMode] = useState(false);

  const onClickThemeHandler = () => {
    setdarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
      <Navbar>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
      <button onClick={onClickThemeHandler}>Theme</button>
    </ThemeProvider>
  );
};

export default App;
