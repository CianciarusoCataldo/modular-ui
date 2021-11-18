import { APP_NAME, TESTS_PATH } from "./config/test.config.json";
import { executeTests } from "./utils/helpers";

executeTests(APP_NAME, TESTS_PATH);
