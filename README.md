<div align="center">
<img width="640px" width="380px" alt="" src="https://user-images.githubusercontent.com/47371276/148471124-9955a41b-693e-4c6c-b6da-bf3590f5eec5.png" />
</div>

# modular-ui

![NPM](https://img.shields.io/npm/l/@cianciarusocataldo/modular-ui?label=License&style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAAXNSR0IArs4c6QAAAEtQTFRFAAAAbdrhbtrhlOPoqejsvby8wL+/33pu6ebm6enp6ufm6urq6+vr7u7u8fHx8vLy8/Pz9PT0+aaY+5uL+6yf+/v7/o97/4x4/456XOpx3wAAAAF0Uk5TAEDm2GYAAAClSURBVCjPxdHZEsIgDAXQxA3jUkXF+P9fKkmgRUOnj70PDNND0iEArBjKOce5KNMCZ2fmWX6y5dXlI7Oe8g1AvzIlCbk/GGfd4k49xr1E1tvEiAk3iTrVJ35EtFzfveafi1Zj01xy/22O3ebCpEy1+hCbanW5l784lHmwrTMzL0N1j1OYQuAQ6tvZYFouxf/ljmmBqw95CxOTZxi5TWXos/kAK+cLKQEkGY0V3h4AAAAASUVORK5CYII=) 
![npm (scoped)](https://img.shields.io/npm/v/@cianciarusocataldo/modular-ui?color=orange%20&label=Latest%20version&style=for-the-badge&logo=npm) 
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@cianciarusocataldo/modular-ui?label=Package%20size&style=for-the-badge&logo=npm)
![Maintenance](https://img.shields.io/maintenance/yes/2025?label=Maintained&style=for-the-badge)


* * *

## Status

### Security
![Code Climate issues](https://img.shields.io/codeclimate/issues/CianciarusoCataldo/modular-ui?label=Code%20Climate%20issues)
![Code Climate technical debt](https://img.shields.io/codeclimate/tech-debt/CianciarusoCataldo/modular-ui?label=Code%20Climate%20tech%20debt)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/@cianciarusocataldo/modular-ui?label=Libraries.io%20dependency%20status&logo=librariesdotio)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@cianciarusocataldo/modular-ui?label=Snyk%20Vulnerabilities&logo=snyk)

### Continuous Integration

[![Modular-ui CI](https://github.com/CianciarusoCataldo/modular-ui/actions/workflows/modular-ui.yml/badge.svg)](https://github.com/CianciarusoCataldo/modular-ui/actions/workflows/modular-ui.yml) 
![AppVeyor](https://img.shields.io/appveyor/build/CianciarusoCataldo/modular-ui?label=AppVeyor%20build&logo=appveyor)
![CircleCI](https://img.shields.io/circleci/build/github/CianciarusoCataldo/modular-ui?label=CircleCI&logo=circleci) 
![Cirrus CI - Specific Branch Build Status](https://img.shields.io/cirrus/github/CianciarusoCataldo/modular-ui/main?label=Cirrus%20CI&logo=cirrusci) 
![Scrutinizer build (GitHub/Bitbucket)](https://img.shields.io/scrutinizer/build/g/CianciarusoCataldo/modular-ui?label=Scrutinizer%20build&logo=scrutinizer)
![Wercker CI Run](https://img.shields.io/wercker/ci/6202992970a92108002506c3?label=Wercker%20CI&logo=oracle) 

### Code analysis

![Codacy grade](https://img.shields.io/codacy/grade/7d09cb70f1844653a8b5978a3d8f164e?label=Codacy%20code%20grade&logo=codacy)
![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/cianciarusocataldo/modular-ui?label=CodeFactor%20code%20quality&logo=codefactor)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/CianciarusoCataldo/modular-ui?label=Code%20Climate%20maintainability&logo=codeclimate)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/CianciarusoCataldo/modular-ui.svg?logo=lgtm&logoWidth=18&label=LGTM%20code%20quality)](https://lgtm.com/projects/g/CianciarusoCataldo/modular-ui/context:javascript) 
![Scrutinizer code quality (GitHub/Bitbucket)](https://img.shields.io/scrutinizer/quality/g/CianciarusoCataldo/modular-ui?label=Scrutinizer%20code%20quality&logo=scrutinizer)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)

### Tests coverage

![Codacy coverage](https://img.shields.io/codacy/coverage/7d09cb70f1844653a8b5978a3d8f164e?label=Codacy%20coverage&logo=codacy)
![Code Climate coverage](https://img.shields.io/codeclimate/coverage/CianciarusoCataldo/modular-ui?label=Code%20Climate%20coverage&logo=codeclimate)
![Codecov](https://img.shields.io/codecov/c/github/CianciarusoCataldo/modular-ui?label=CodeCov%20coverage&logo=codecov)
![Coveralls](https://img.shields.io/coveralls/github/CianciarusoCataldo/modular-ui?label=Coveralls%20coverage&&logo=coveralls) 
![Scrutinizer coverage (GitHub/BitBucket)](https://img.shields.io/scrutinizer/coverage/g/CianciarusoCataldo/modular-ui/main?label=Scrutinizer%20coverage)

* * *

<br>

## Summary

-   [Main Concepts](#main-concepts)
-   [Getting started](#getting-started)
    -   [Installation](#installation)
    -   [Usage](#usage)
-   [Tests](#tests)
-   [Authors](#authors)
-   [License](#license)

<br>

* * *

## Main Concepts

This library is built upon few (but important) concepts:

-   Small library size, to not impact on final app bundle size
-   Few dependencies, to not introduce a bunch of additional packages (that could also introduce bugs or version conflicts with pre-existent packages)
-   Let the user customize every part as desired, but with default values set otherwise, to make every component ready to be used without so many parameters
-   Every component should be integrable into every react app, so their behaviour must be customizable too (with callbacks, for example)

With these goals in mind, I created this tiny UI library. The same concepts are also the base of another project I maintain, [modular-app](https://github.com/CianciarusoCataldo/modular-app), a ready to use react app template that use this library internally (check it out, it is also the base of [Modular-ui guide page](https://cianciarusocataldo.github.io/modular-ui/) !)

<br>

* * *

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

<br>

* * *

## Tests

Unit tests for every lib function are located inside `tests` folder. The test script is executed with pre-defined test command:

    npm run test

This lib is analyzed and tested with different automated code analysis systems:

-   [CircleCI](https://app.circleci.com/pipelines/github/CianciarusoCataldo/modular-ui)
-   [Code Climate](https://codeclimate.com/github/CianciarusoCataldo/modular-ui)
-   [CodeCov](https://app.codecov.io/gh/CianciarusoCataldo/modular-ui)
-   [CodeFactor](https://www.codefactor.io/repository/github/cianciarusocataldo/modular-ui)
-   [Scrutinizer](https://scrutinizer-ci.com/g/CianciarusoCataldo/modular-ui/)
-   [Coveralls](https://coveralls.io/github/CianciarusoCataldo/modular-ui)

<br>

* * *

## Authors

-   [**Cataldo Cianciaruso**](https://github.com/CianciarusoCataldo)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
