import { useDispatch, useSelector } from "react-redux";

import { LANGUAGES_ICONS } from "assets/images";

import { changeLanguage } from "api/core/store/internal-slices/ui/actions";
import { getLanguage } from "api/core/store/internal-slices/ui/selectors";

import { Dropdown } from "modular-ui-preview";

/** Custom Modular-app laguage selector */
const LanguageSelector = () => {
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);
  const LANGUAGES = Object.keys(LANGUAGES_ICONS);

  return (
    <div style={{ zIndex: 999 }} className="fixed right-1 top-0 bg-gray-700">
      <Dropdown
        dark={false}
        value={LANGUAGES.findIndex((lang) => lang === language)}
        onChange={(lang: number) => {
          dispatch(changeLanguage(LANGUAGES[lang]));
        }}
        content={Object.keys(LANGUAGES_ICONS).map((lang) => ({
          name: lang,
          icon: LANGUAGES_ICONS[lang],
        }))}
      />
    </div>
  );
};

export default LanguageSelector;
