/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  rootDir: "../",
  preset: "ts-jest",
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$":
      "<rootDir>/tests/__mocks__/fileMock.js",
  },
  transform: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.(js|jsx)?$": "babel-jest",
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["./scripts/testSetup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "src/$1",
    "\\.(css|less)$": "<rootDir>/tests/__mocks__/fileMock.js",
  },
  modulePathIgnorePatterns: ["src/tests/*.testsuite.*"],
  testPathIgnorePatterns: ["src/tests/"],
  transformIgnorePatterns: ["node_modules/"],
  testEnvironment: "jsdom",
  testMatch: ["**/src/main.test.tsx"],
  modulePathIgnorePatterns: ["/tests/"],
  coveragePathIgnorePatterns: ["/tests/"],
};
