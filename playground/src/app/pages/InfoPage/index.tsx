import { useInfoTranslations } from "app/hooks/localization";

import RouterLink from "app/components/atoms/RouterLink";
import Page from "app/components/molecules/Page";
import Form from "app/components/molecules/Form";
import Card from "app/components/molecules/Card";

const InfoPage = () => {
  const t = useInfoTranslations();

  return (
    <Page>
      <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row">
        <Form
          title={t("form", { context: "title" })}
          submitLabel={t("form", { context: "submit" })}
          fields={[
            {
              name: t("form_firstField", { context: "name" }),
              placeholder: t("form_firstField", { context: "placeholder" }),
              required: true,
              header: t("form_firstField", { context: "header" }),
              validate: (value: string) => {
                console.log(/\S+@\S+\.\S+/.test(value));
                return /\S+@\S+\.\S+/.test(value);
              },
            },
            {
              name: t("form_secondField", { context: "name" }),
              placeholder: t("form_secondField", { context: "placeholder" }),
              required: false,
              header: t("form_secondField", { context: "header" }),
            },
          ]}
          onSubmit={(values) => console.log(values)}
          className="mx-6 my-8"
        />
        <Card
          title={t("homeCard", { context: "title" })}
          className="mx-6 my-8"
          header={t("homeCard", { context: "header" })}
          body={t("homeCard", { context: "body" })}
          footer={
            <RouterLink
              to="HOME"
              label={t("homeCard", { context: "footer" })}
            />
          }
        />
      </div>
    </Page>
  );
};

export default InfoPage;
