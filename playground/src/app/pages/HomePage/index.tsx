import { useSelector } from "react-redux";

import { Card, CodeBox, Link, Page } from "modular-ui-preview";

import { useHomePageTranslation } from "app/hooks/localization";

import { getRoutesPaths } from "api/state-slices/config/selectors";
import { NavLink } from "react-router-dom";
import { FLEX_STYLES } from "assets/styles";

const HomePage = () => {
  const t = useHomePageTranslation();
  const PATHS = useSelector(getRoutesPaths);

  const parseLocalizedString = (localizedString: string) => {
    const splittedString = localizedString.split("#LINK");
    return (
      <div>
        {splittedString.map((part, index) => {
          if (index % 2 !== 0) {
            const splittedPart = part.split("#");

            return (
              <Link
                to={splittedPart[0]}
                key={`parsed_link_${index}`}
                label={splittedPart[1]}
                newTab
              />
            );
          } else {
            return part;
          }
        })}
      </div>
    );
  };

  const parsedString = parseLocalizedString(t("description"));

  return (
    <Page className="">
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{t("title")}</p>
      <div className={FLEX_STYLES.ROWS_COLS}>
        <div>
          <Card body={parsedString} />
          <Card
            title="Installation"
            body={
              <div className="overflow-hidden">
                <p className="my-1">
                  {t("installation_description", { context: "firstPart" })}
                </p>
                <CodeBox enhanced code="npm i @cianciarusocataldo/modular-ui" />
                <p className="my-2">
                  {t("installation_description", { context: "secondPart" })}
                </p>
                <CodeBox
                  enhanced
                  code={`import { Drawer, Page } from "@cianciarusocataldo/modular-ui";`}
                />
              </div>
            }
          />
        </div>
        <Card
          header={t("componentsList_header")}
          body={
            <div className="flex flex-col">
              {Object.keys(PATHS)
                .slice(1)
                .map((routeKey, index) => {
                  return (
                    <li key={`link_${index}`}>
                      <NavLink
                        className="text-blue-400 hover:text-blue-700 py-1 text-lg"
                        to={PATHS[routeKey as RouteKey]}
                      >
                        {routeKey}
                      </NavLink>
                    </li>
                  );
                })}
            </div>
          }
        />
      </div>
    </Page>
  );
};

export default HomePage;
