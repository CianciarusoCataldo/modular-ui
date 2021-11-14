import { Previewer } from "@cianciarusocataldo/demo-ui";
import { Page, Dropdown } from "modular-ui-preview";

const HomePage = () => {
  return (
    <Page>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <Previewer label="Dropdown">
          <Dropdown
            className="mx-6 my-8"
            defaultValue="Dropdown"
            content={[
              { name: "Element 1", action: () => {} },
              { name: "Element 2", action: () => {} },
            ]}
          />
        </Previewer>
      </div>
    </Page>
  );
};

export default HomePage;
