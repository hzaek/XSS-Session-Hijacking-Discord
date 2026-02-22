/** @type {import("jest").Config} */
module.exports = {
  testEnvironment: "node",
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["<rootDir>/dist/"],
};
