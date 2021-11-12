```tsx
import Form from "./";

<Form
  title="Form title"
  fields={[
    {
      name: "field 1",
      placeholder: "field 1 default value",
      required: true,
      header: "field 1 header",
      validate: (value) => {
        console.log(/\S+@\S+\.\S+/.test(value));
        return /\S+@\S+\.\S+/.test(value);
      },
    },
    {
      name: "field 2",
      placeholder: "field 2 default value",
      required: false,
      header: "field 2 header",
    },
  ]}
  onSubmit={(values) => console.log(values)}
/>;
```
