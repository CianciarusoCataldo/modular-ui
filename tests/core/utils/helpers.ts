var fs = require("fs");
var path = require("path");

export const describeSection = (section: string, test?: () => void) => {
  describe(`\n\n** ${section} **\n`, test ? test : () => {});
};

export const describeComponent = (component: string, test?: () => void) => {
  describe(`\n\n     - ${component}\n`, test ? test : () => {});
};

export const describeTest = (component: string, testSuite: () => void) => {
  describe(`\n        - ${component}\n`, testSuite ? testSuite : () => {});
};

export const getFilesList = (dir: string, showOnlyDirs?: boolean) => {
  const testDir = path.resolve(__dirname, dir);
  let result = [];
  let openedDir = fs.opendirSync(testDir);

  let filesLeft = true;
  while (filesLeft) {
    let fileDirent = openedDir.readSync();
    if (fileDirent != null) {
      const isDir = fs
        .lstatSync(path.join(openedDir.path, fileDirent.name))
        .isDirectory();
      if (isDir && showOnlyDirs) {
        result.push({
          name: fileDirent.name.split(".")[0],
          path: path.join(openedDir.path, fileDirent.name),
        });
      } else if (!isDir) {
        result.push({
          name: fileDirent.name.split(".")[0],
          path: path.join(openedDir.path, fileDirent.name),
        });
      }
    } else filesLeft = false;
  }

  result = result.sort((elem1, elem2) => {
    if (elem1.name < elem2.name) return -1;
    if (elem1.name === elem2.name) return 0;
    return 1;
  });

  openedDir.close();
  return result;
};

export const executeTests = (APP_NAME: string, TESTS_PATH: string) => {
  const path = require("path");

  const TEST_SUITES_PATH = path.resolve(__dirname, TESTS_PATH);
  const dirs = getFilesList(TEST_SUITES_PATH, true);

  describe(`\n                       ## ${APP_NAME} - Unit tests - v.0.5 ##`, () => {
    dirs.forEach(({ name: category }) =>
      describeSection(
        category.charAt(0).toUpperCase() + category.slice(1),
        () => {
          const elements = getFilesList(path.join(TEST_SUITES_PATH, category));
          elements.map((element) => {
            describeComponent(element.name, () => {
              try {
                require(element.path);
              } catch (error) {
                console.log(error);
                console.log(`${element.path} not found`);
              }
            });
          });
        }
      )
    );
  });
};
