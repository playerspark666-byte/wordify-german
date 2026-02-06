module.exports = {
  displayName: 'api-v2',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',

  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json'
      }
    ]
  },

  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: '../../coverage/apps/api-v2',
};
