import { useSelector } from "react-redux";

import { Card, CodeBox, Link, Page } from "modular-ui-preview";

import { useHomePageTranslation } from "app/hooks/localization";

import { getRoutesPaths } from "api/state-slices/config/selectors";
import { NavLink } from "react-router-dom";
import { FLEX_STYLES } from "assets/styles";

const HomePage = () => {
  const t = useHomePageTranslation();
  const PATHS = useSelector(getRoutesPaths);

  const PARSERS = {
    description: (localizedString: string) => {
      const splittedString = localizedString.split("#LINK");
      return (
        <div className="">
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
              return <span>{part}</span>;
            }
          })}
        </div>
      );
    },
    installation: (localizedString: string) => {
      const splittedString = localizedString.split("#CODE");
      return (
        <div>
          {splittedString.map((part, index) => {
            if (index % 2 !== 0) {
              const splittedPart = part.split("#LANG");

              return (
                <div className="my-2" key={`parsed_code_${index}`}>
                  <CodeBox
                    environment={splittedPart.length > 1 && splittedPart[1]}
                    code={
                      splittedPart.length > 1
                        ? splittedPart[2]
                        : splittedPart[0]
                    }
                    enhanced
                    dark
                  />
                </div>
              );
            } else {
              return (
                <div className="my-2" key={`parsed_code_${index}`}>
                  {part}
                </div>
              );
            }
          })}
        </div>
      );
    },
  } as const;

  const description = PARSERS.description(t("description"));
  const installationGuide = PARSERS.installation(
    t("installation", { context: "body" })
  );

  return (
    <Page className="">
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{t("title")}</p>
      <div className={FLEX_STYLES.ROWS_COLS}>
        <div>
          <Card body={description} />
          <Card
            title={t("installation", { context: "title" })}
            titleClassName="text-2xl text-white"
            body={installationGuide}
            bodyClassName="p-2"
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
