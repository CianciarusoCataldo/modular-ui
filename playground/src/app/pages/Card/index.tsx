import { Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import { Page, Card } from "modular-ui-preview";

const HomePage = () => {
  return (
    <Page>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <Demo
          label="Card"
          props={{
            title: StringProp("Card title"),
            header: StringProp("Card header"),
            body: StringProp("Card body"),
            footer: StringProp("Card footer"),

            titleClassName: StringProp("text-black"),
            headerClassName: StringProp(""),
            bodyClassName: StringProp(""),
            footerClassName: StringProp(""),
          }}
          rows={[
            ["title", "header", "body", "footer"],
            [
              "titleClassName",
              "headerClassName",
              "bodyClassName",
              "footerClassName",
            ],
          ]}
          startColor="#999"
        >
          {(props: any) => <Card {...props} />}
        </Demo>
      </div>
    </Page>
  );
};

export default HomePage;
