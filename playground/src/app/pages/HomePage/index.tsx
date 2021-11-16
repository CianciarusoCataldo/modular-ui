import { Page } from "modular-ui-preview";
import { ButtonWrapper } from "../Button";
import { CardWrapper } from "../Card";
import { DividerWrapper } from "../Divider";
import { DropdownWrapper } from "../Dropdown";
import { FormWrapper } from "../Form";
import { LinkWrapper } from "../Link";
import { ModalWrapper } from "../Modal";

const HomePage = () => {
  return (
    <Page>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <ButtonWrapper />
        <DividerWrapper />
        <CardWrapper />
        <ModalWrapper />
        <DropdownWrapper />
        <LinkWrapper />
        <FormWrapper />
      </div>
    </Page>
  );
};

export default HomePage;
