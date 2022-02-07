<div align="center">
<img width="600px" alt="" src="https://user-images.githubusercontent.com/47371276/148471124-9955a41b-693e-4c6c-b6da-bf3590f5eec5.png" />
</div>

# modular-ui
![NPM](https://img.shields.io/npm/l/@cianciarusocataldo/modular-ui?label=License)
![npm (scoped)](https://img.shields.io/npm/v/@cianciarusocataldo/modular-ui?color=blue&label=Latest%20version)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@cianciarusocataldo/modular-ui?label=Package%20size)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/@cianciarusocataldo/modular-ui/peer/react?color=orange&label=Supported%20React%20version)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/@cianciarusocataldo/modular-ui?label=Libraries.io%20dependency%20status)
![Scrutinizer code quality (GitHub/Bitbucket)](https://img.shields.io/scrutinizer/quality/g/cianciarusocataldo/modular-ui?label=Scrutinizer%20code%20quality)
![Codecov](https://img.shields.io/codecov/c/github/CianciarusoCataldo/modular-ui?label=CodeCov%20coverage)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/CianciarusoCataldo/modular-ui?label=Code%20Climate%20maintainability)
![Code Climate coverage](https://img.shields.io/codeclimate/coverage-letter/CianciarusoCataldo/modular-ui?label=Code%20Climate%20coverage)
![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/cianciarusocataldo/modular-ui?label=CodeFactor%20code%20quality)
![Coveralls](https://img.shields.io/coveralls/github/CianciarusoCataldo/modular-ui?label=Coveralls%20coverage)
![npms.io (quality)](https://img.shields.io/npms-io/quality-score/@cianciarusocataldo/modular-ui?label=npms-io%20quality)
[![Modular-UI CI](https://github.com/CianciarusoCataldo/modular-ui/actions/workflows/modular-ui.yml/badge.svg?branch=main)](https://github.com/CianciarusoCataldo/modular-ui/actions/workflows/modular-ui.yml)
![Maintenance](https://img.shields.io/maintenance/yes/2025?label=Maintained)

Do you need to build a react web-app without maintaining a codebase for every component, and without a lot of additional dependencies? Modular-ui is what you are looking for ! More details on [Modular-ui official page](https://cianciarusocataldo.github.io/modular-ui/)

## Summary
- [Main Concepts](#main-concepts)
- [Getting started](#getting-started)
	- [Installation](#installation)
	- [Usage](#usage)
- [Tests](#tests)
- [Authors](#authors)
- [License](#license)

## Main Concepts 

This library is built upon few (but important) concepts:
- Small library size, to not impact on final app bundle size
- Few dependencies, to not introduce a bunch of additional packages (that could also introduce bugs or version conflicts with pre-existent packages)
- Let the user customize every part as desired, but with default values set otherwise, to make every component ready to be used without so many parameters
- Every component should be integrable into every react app, so their behaviour must be customizable too (with callbacks, for example)

With these goals in mind, I created this tiny UI library. The same concepts are also the base of another project I maintain, [modular-app](https://github.com/CianciarusoCataldo/modular-app), a ready to use react app template that use this library internally (check it out, it is also the base of [Modular-ui guide page](https://cianciarusocataldo.github.io/modular-ui/) !)

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
             footer={<Link to="https://cianciarusocataldo.github.io/modular-ui">Modular-ui page</Link>}
          />
       </Page>,     
       document.getElementById("root"));

```

[![Edit modular-ui playground](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/modular-ui-playground-gfpbb?fontsize=14&hidenavigation=1&theme=dark&view=preview)


## Tests
Unit tests for every lib function are located inside `tests` folder. The test script is executed with pre-defined test command:
```
npm run test
```

This lib is analyzed and tested with different automated code analysis systems:
- [Code Climate](https://codeclimate.com/github/CianciarusoCataldo/modular-ui)
- [CodeCov](https://app.codecov.io/gh/CianciarusoCataldo/modular-ui)
- [CodeFactor](https://www.codefactor.io/repository/github/cianciarusocataldo/modular-ui)
- [Scrutinizer](https://scrutinizer-ci.com/g/CianciarusoCataldo/modular-ui/)
- [Coveralls](https://coveralls.io/github/CianciarusoCataldo/modular-ui)

---
## Authors

- [**Cataldo Cianciaruso**](https://github.com/CianciarusoCataldo)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
