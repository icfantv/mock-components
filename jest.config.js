module.exports = {
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json'
    }
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  restoreMocks: true,
  testRegex: '(/<rootDir>/src/.*|(\\.|/)spec)\\.tsx$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}
