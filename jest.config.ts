export default {
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
    ],
    globals: {
        'ts-jest': {
            isolatedModules: true
        }
    },
    moduleFileExtensions: [
        'css',
        'js',
        'json',
        'jsx',
        'scss',
        'ts',
        'tsx'
    ],
    moduleNameMapper: {
        '^.+\\.(css|sass|scss)$': 'identity-obj-proxy',
        '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
        '<rootDir>/src/test/__mocks__/fileMock.ts',
    },
    modulePaths: [
        '<rootDir>'
    ],
    roots: [
        '<rootDir>/src'
    ],
    setupFilesAfterEnv: ['<rootDir>/src/test/config/jest.setup.ts'],
    testRegex: 'src/test/t_.*\.(ts|tsx)$',
    testEnvironment: "jsdom",
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': "ts-jest",
    }
  }