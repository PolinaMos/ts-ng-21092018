module.exports = (config) => {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      { pattern: "./**/*.ts" }
    ],
    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["Chrome"],
    singleRun: "true",
    logLevel: config.LOG_DEBUG,
    karmaTypescriptConfig: {
      tsconfig: ".tsconfig.json",
      reports: {
        "text-summary": ""
      }
    }
  })
}