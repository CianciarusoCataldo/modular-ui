export const describeSection = (section: string, test?: () => void) => {
  describe(`\n\n** ${section} **\n`, test ? test : () => {});
};

export const describeComponent = (component: string, test?: () => void) => {
  describe(`\n\n     - ${component}\n`, test ? test : () => {});
};

export const describeTest = (component: string, testSuite: () => void) => {
  describe(`\n        - ${component}\n`, testSuite ? testSuite : () => {});
};
