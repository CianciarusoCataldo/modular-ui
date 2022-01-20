import { useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import { isInDarkMode, setDarkMode } from "@cianciarusocataldo/modular-engine";
import { Toggle } from "modular-ui-preview";

const DarkModeSwitcher = () => {
  const dispatch = useDispatch();

  const dark = useSelector(isInDarkMode);
  const darkModeSwitch = useCallback(() => {
    dispatch(setDarkMode(!dark));
  }, [dispatch, dark]);

  return (
    <Toggle shadow value={dark} onChange={darkModeSwitch} className="mx-1" />
  );
};

export default DarkModeSwitcher;
