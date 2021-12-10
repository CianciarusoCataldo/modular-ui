import { changeLanguage } from "api/state-slices/ui/actions";
import { getLanguage } from "api/state-slices/ui/selectors";
import { LANGUAGES_ICONS } from "assets/images";
import { Dropdown } from "modular-ui-preview";
import { useDispatch, useSelector } from "react-redux";

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);
  const LANGUAGES = Object.keys(LANGUAGES_ICONS);

  return (
    <div style={{ zIndex: 999 }} className="fixed right-1 top-0 bg-gray-700">
      <Dropdown
        dark={false}
        actualValue={LANGUAGES.findIndex((lang) => lang === language)}
        onChange={(lang: SupportedLanguage, index: number) => {
          dispatch(changeLanguage(lang as SupportedLanguage));
        }}
        content={Object.keys(LANGUAGES_ICONS).map((lang) => ({
          name: lang,
          icon: LANGUAGES_ICONS[lang as SupportedLanguage],
        }))}
      />
    </div>
  );
};

export default LanguageSelector;
