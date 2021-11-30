![modular-ui_logo](https://user-images.githubusercontent.com/47371276/142478359-80bee983-0834-40a3-a80f-8360d79a77be.png)

# modular-ui
![NPM](https://img.shields.io/npm/l/@cianciarusocataldo/modular-ui?label=License)
![npm (scoped)](https://img.shields.io/npm/v/@cianciarusocataldo/modular-ui?color=blue&label=Latest%20version)
![Codecov](https://img.shields.io/codecov/c/github/CianciarusoCataldo/modular-ui?label=Unit%20tests%20coverage)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@cianciarusocataldo/modular-ui?label=npm%20package%20size)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/@cianciarusocataldo/modular-ui/peer/react?color=orange&label=Supported%20React%20version)

Do you need to build a react web-app without maintaining a codebase for every component, and without a lot of additional dependencies? Modular-ui is what you are looking for ! More details on [Modular-ui official page](https://cianciarusocataldo.github.io/modular-ui/)

## Summary
- [Main Concepts](#main-concepts)
- [Getting started](#getting-started)
	- [Installation](#installation)
	- [Usage](#usage)
- [Authors](#authors)
- [License](#license)

## Main Concepts 

This library is built upon few (but important) concepts:
- Small library size, to not impact on final app bundle size
- Few dependencies, to not introduce a bunch of additional packages (that could also introduce bugs or version conflicts with pre-existent packages)
- Let the user customize every part as desired, but with default values set otherwise, to make every component ready to be used without so many parameters
- Every component should be integrable into every react app, so their behaviour must be customizable too (with callbacks, for example)

With these goals in mind, I created this tiny UI library. The same concepts are also the base of another project I maintain, [react-ready-to-go](https://github.com/CianciarusoCataldo/react-ready-to-go), a ready to use react app template that use this library internally (check it out, it is also the base of [Modular-ui guide page](https://cianciarusocataldo.github.io/modular-ui/) !)

## Getting started

### Installation

If you want to use this library inside your project, just install it:
```

npm i @cianciarusocataldo/modular-ui

```


### Usage

After installation, you can use every `modular-ui` component in your app. Run this example to see them in action:
```
import { Card, Link, Page } from "@cianciarusocataldo/modular-ui";
import { render } from "react-dom";

render(<Page>
          <Card
             body={<p>This page is entirely made with modular-ui components !</p>}
             footer={<Link to="https://cianciarusocataldo.github.io/modular-ui" label="Modular-ui page" />}
          />
       </Page>,     
       document.getElementById("root"));

```

## Authors

- [**Cataldo Cianciaruso**](https://github.com/CianciarusoCataldo)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
