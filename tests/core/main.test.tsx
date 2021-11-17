import {
  APP_NAME,
  CATEGORIES,
  ROOT_DIR,
  TEST_SUITES_PATH,
} from "./config/test.config.json";

/** Helpers */
import { describeComponent, describeSection } from "./utils/helpers";

describe(`\n                       ## ${APP_NAME} - Unit tests - v.0.5 ##`, () => {
  Object.keys(CATEGORIES).map((category) =>
    describeSection(
      category.charAt(0).toUpperCase() + category.slice(1),
      () => {
        CATEGORIES[category].map((element) => {
          describeComponent(element, () => {
            try {
              require(`${ROOT_DIR}${TEST_SUITES_PATH}${category}/${element}.testsuite.tsx`);
            } catch(error) {
              console.log(error)
              console.log(
                `${ROOT_DIR}${TEST_SUITES_PATH}${category}/${element}.testsuite not found`
              );
            }
          });
        });
      }
    )
  );
});
