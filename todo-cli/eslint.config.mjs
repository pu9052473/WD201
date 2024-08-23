export default [
    {
      ignores: ['node_modules/**'],
      files: ['**/*.js'],
      languageOptions: {
        ecmaVersion: 'latest',
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      rules: {},
    },
    {
      files: ['**/*.js'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: {
          browser: true,
          commonjs: true,
          es2021: true,
        },
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      rules: {},
    },
  ];
  