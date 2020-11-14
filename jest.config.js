module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['app/**/*/.js(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
}
