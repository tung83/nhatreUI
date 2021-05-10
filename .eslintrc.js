const prod = process.env.NODE_ENV === 'production';
const errProdOtherwiseWarn = () => (prod ? 'error' : 'warn');

module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    plugins: ['@typescript-eslint', 'react'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module', // Allows for the use of imports
    },
    rules: {
        // Disable prop-types as we use TypeScript for type checking
        'react/prop-types': 'off',
        'no-console': errProdOtherwiseWarn(),
        'no-debugger': errProdOtherwiseWarn(),
        'array-bracket-spacing': 'off',
        'no-prototype-builtins': 'off',
        'max-len': ['error', { code: 80 }],
        'no-tabs': ['error', { allowIndentationTabs: false }],
        'linebreak-style': ['error', 'unix'],
        semi: ['error', 'always'],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                FunctionDeclaration: { parameters: 'first' },
                FunctionExpression: { parameters: 'first' },
                CallExpression: { arguments: 'first' },
            },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/indent': [
            'error',
            4,
            {
                SwitchCase: 1,
                FunctionDeclaration: { parameters: 'first' },
                FunctionExpression: { parameters: 'first' },
                CallExpression: { arguments: 'first' },
            },
        ],
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/no-unused-vars': [
            'error',
            { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
        ],
    },
    overrides: [
        // Override some TypeScript rules just for .js files
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
};
