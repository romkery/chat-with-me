module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'no-unused-vars': 'off',
        'semi': [2, 'always'],
        'quotes': [2, 'single', {'avoidEscape': true}],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
};
