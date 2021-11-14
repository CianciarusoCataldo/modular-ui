import { Previewer } from "@cianciarusocataldo/demo-ui";
import { Page, Form } from "modular-ui-preview";

const HomePage = () => {
  return (
    <Page>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <Previewer>
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
