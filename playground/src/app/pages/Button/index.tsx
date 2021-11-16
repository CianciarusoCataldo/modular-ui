import { Page, Button } from "modular-ui-preview";
import { Demo, StringProp } from "@cianciarusocataldo/demo-ui";

const ButtonPage = () => {
  return (
    <Page>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <ButtonWrapper />
      </div>
    </Page>
  );
};

export const ButtonWrapper = () => (
  <Demo
    label="Button"
    props={{
      children: StringProp("Button content"),
      className: StringProp(""),
    }}
  >
    {(props: any) => (
      <Button onClick={() => alert("Button clicked")} {...props} />
    )}
  </Demo>
);

export default ButtonPage;
