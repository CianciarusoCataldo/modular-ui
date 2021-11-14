import { useDispatch } from "react-redux";
import { openModal } from "api/state-slices/modal/actions";
import { Demo, Previewer, StringProp } from "@cianciarusocataldo/demo-ui";
import {
  Page,
  Card,
  Dropdown,
  Form,
  Divider,
  Button,
  Link,
} from "modular-ui-preview";

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <Page>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <Demo
          props={{
            children: StringProp("Button content"),
            className: StringProp(""),
          }}
        >
          {(props: any) => (
            <Button onClick={() => alert("Button clicked")} {...props} />
          )}
        </Demo>
        <Demo label="Divider" props={{ className: StringProp("") }}>
          {(props: any) => <Divider {...props} />}
        </Demo>
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
        <Previewer label="Modal">
          <button
            className="px-5 text-lg mx-5 mt-3 lg:my-auto xl:my-auto 2xl:my-auto 3xl:my-auto 4xl:my-auto py-3 rounded-md focus:outline-none hover:text-blue-400 bg-gradient-to-r from-white to-gray-200"
            onClick={() => dispatch(openModal("EMPTY"))}
          >
            {"Open modal"}
          </button>
        </Previewer>
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
        <Demo
          props={{
            label: StringProp("Link label"),
            className: StringProp(""),
          }}
        >
          {(props: any) => <Link {...props} />}
        </Demo>
        <Previewer label="Form">
          <Form
            title="Form title"
            submitLabel="Form submit button"
            fields={[
              {
                name: "Field 1",
                placeholder: "Field 1 placeholder",
                required: false,
                header: "Field 1 header",
                validate: (value: string) => {
                  console.log(/\S+@\S+\.\S+/.test(value));
                  return /\S+@\S+\.\S+/.test(value);
                },
              },
              {
                name: "Field 2",
                placeholder: "Field 2 placeholder",
                required: false,
                header: "Field 2 header",
              },
            ]}
            onSubmit={(values: any) => console.log(values)}
            className="mx-6 my-8"
          />
        </Previewer>
      </div>
    </Page>
  );
};

export default HomePage;
