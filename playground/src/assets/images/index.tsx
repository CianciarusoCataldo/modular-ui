import LeftArrow from "./icons/commons/left-arrow.svg";
import Burger from "./icons/commons/burger.svg";
import Home from "./icons/pages/home.svg";
import Info from "./icons/pages/info.svg";

import IT_FLAG from "./icons/langs/it.svg";
import FR_FLAG from "./icons/langs/fr.svg";
import EN_FLAG from "./icons/langs/en.svg";
import DE_FLAG from "./icons/langs/de.svg";
import ES_FLAG from "./icons/langs/es.svg";

export const LeftArrowIcon = <img alt="" src={LeftArrow} />;
export const DownArrowIcon = (
  <img alt="" className="transform -rotate-90" src={LeftArrow} width={10} />
);
export const BurgerIcon = <img alt="" src={Burger} width={60} />;

export const HOME_ICON = <img alt="" src={Home} width={40} />;
export const INFO_ICON = <img alt="" src={Info} width={40} />;

export const LANGUAGES_ICONS: Record<SupportedLanguage, JSX.Element> = {
  it: <img alt="" width={20} height={20} src={IT_FLAG} />,
  de: <img alt="" width={20} height={20} src={DE_FLAG} />,
  fr: <img alt="" width={20} height={20} src={FR_FLAG} />,
  es: <img alt="" width={20} height={20} src={ES_FLAG} />,
  en: <img alt="" width={20} height={20} src={EN_FLAG} />,
};
