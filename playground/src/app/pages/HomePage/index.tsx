import { useHomePageTranslation } from "app/hooks/localization";
import { Page } from "modular-ui-preview";
import { ButtonWrapper } from "../Button";
import { CardWrapper } from "../Card";
import { DividerWrapper } from "../Divider";
import { DropdownWrapper } from "../Dropdown";
import { FormWrapper } from "../Form";
import { LinkWrapper } from "../Link";
import { ModalWrapper } from "../Modal";

const HomePage = () => {
  const t = useHomePageTranslation();
  return (
    <Page>
      <p className="text-4xl mt-8 mb-5 ml-3 text-white">{t("title")}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <ButtonWrapper />
        <DividerWrapper />
        <LinkWrapper />
      </div>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <CardWrapper />
        <FormWrapper />
      </div>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <ModalWrapper />
        <DropdownWrapper />
      </div>
    </Page>
  );
};

export default HomePage;
