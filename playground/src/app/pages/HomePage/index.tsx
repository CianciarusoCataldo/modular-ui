import { useHomeTranslations } from "app/hooks/localization";

import { useDispatch, useSelector } from "react-redux";
import { openModal } from "api/state-slices/modal/actions";
import { showToast } from "api/state-slices/ui/actions";

import Card from "app/components/molecules/Card";
import Page from "app/components/molecules/Page";
import Link from "app/components/atoms/RouterLink";
import Dropdown from "app/components/molecules/Dropdown";
import { getRoutesPaths } from "api/state-slices/config/selectors";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const t = useHomeTranslations();
  const dispatch = useDispatch();
  const PATHS = useSelector(getRoutesPaths);

  return (
    <Page>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <Card
          title={t("infoCard", { context: "title" })}
          header={t("infoCard", { context: "header" })}
          body={t("infoCard", { context: "body" })}
          footer={
            <NavLink to={PATHS.INFO}>
              <Link to="INFO" label={t("infoCard", { context: "footer" })} />
            </NavLink>
          }
        />
        <button
          className="px-5 text-lg mx-5 mt-3 lg:my-auto xl:my-auto 2xl:my-auto 3xl:my-auto 4xl:my-auto py-3 rounded-md focus:outline-none hover:text-blue-400 bg-gradient-to-r from-white to-gray-200"
          onClick={() => dispatch(openModal("EMPTY"))}
        >
          {t("modalButton", { context: "label" })}
        </button>
        <button
          className="px-5 text-lg mx-5 mt-3 lg:my-auto xl:my-auto 2xl:my-auto 3xl:my-auto 4xl:my-auto py-3 rounded-md focus:outline-none hover:text-blue-400 bg-gradient-to-r from-white to-gray-200"
          onClick={() => {
            (["info", "error", "warning", "success"] as ToastKey[]).forEach(
              (toast) =>
                dispatch(showToast(t("toasts", { context: toast }), toast))
            );
          }}
        >
          {t("toastButton", { context: "label" })}
        </button>
        <Dropdown
          defaultValue="Dropdown"
          content={[
            { name: "element 1", action: () => {} },
            { name: "element 2", action: () => {} },
          ]}
        />
      </div>
    </Page>
  );
};

export default HomePage;
