import { useSelector } from "react-redux";

import { Card, Link, Page } from "modular-ui-preview";

import { useHomePageTranslation } from "app/hooks/localization";

import { getRoutesPaths } from "api/state-slices/config/selectors";
import { NavLink } from "react-router-dom";

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
                target="_blank"
                key={`parsed_link_${index}`}
              >
                {splittedPart[1]}
              </Link>
            );
          } else {
            return part;
          }
        })}
      </div>
    );
  };

  return (
    <Page>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{t("title")}</p>
      <Card body={parseLocalizedString(t("description"))} />
      <Card
        header={t("componentsList_header")}
        body={
          <div className="flex flex-col">
            {Object.keys(PATHS)
              .slice(1)
              .map((routeKey, index) => {
                return (
                  <NavLink
                    className="text-blue-400 hover:text-blue-700"
                    key={`link_${index}`}
                    to={PATHS[routeKey as RouteKey]}
                  >
                    {routeKey}
                  </NavLink>
                );
              })}
          </div>
        }
      />
    </Page>
  );
};

export default HomePage;
