```tsx
import Dropdown from "./";

<div className="w-full">
  <Dropdown
    defaultValue="test"
    content={[
      {
        name: "dropdown item 1",
        action: () => console.log("dropdown item 1"),
      },
      {
        name: "dropdown item 2",
        action: () => console.log("dropdown item 2"),
      },
      {
        name: "dropdown item 3",
        action: () => console.log("dropdown item 3"),
      },
      {
        name: "dropdown item 4",
        action: () => console.log("dropdown item 4"),
      },
    ]}
  />
</div>;
```
