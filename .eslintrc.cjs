module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "import", "prettier"],
  rules: {
    // 强制或禁止箭头函数体使用大括号
    // "arrow-body-style": "off",
    // 要求使用箭头函数作为回调
    // "prefer-arrow-callback": "off",
    // 半风格-强制一致地使用反引号、双引号或单引号
    semi: ["error", "always"],
    // 引号-强制一致地使用反引号、双引号或单引号
    quotes: ["error", "double"],
    // 需要使用 === 和 !== (消除类型不安全的相等运算符)
    eqeqeq: ["error", "always"],
    "object-shorthand": ["error", "always"],
    "no-sequences": ["error", { allowInParentheses: false }],
    // 字符串拼接使用字符串模板而不是+
    "prefer-template": "error",
    // 确保将块语句包裹在花括号中来防止错误并提高代码清晰度
    curly: "error",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: ["function", "class", "const", "let", "var", "block-like"],
        next: "*",
      },
      { blankLine: "always", prev: "*", next: ["return", "block-like"] },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    "padded-blocks": ["error", "never"],
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "no-console": "error",
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["~/localization/*"],
            message: "Don't import any internals from a module, only use its public api",
          },
        ],
      },
    ],
    // 对比排序前后代码，排序后的代码看起来更整洁
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "~/**",
            group: "internal",
          },
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "never",
      },
    ],
    // 验证所有命名导入是否是引用模块中命名导出集的一部分
    "import/named": "error",
    // 导入/无重复
    "import/no-duplicates": "error",
    // 防止在 import 和 require 语句中出现不必要的路径段
    "import/no-useless-path-segments": [
      "error",
      {
        noUselessIndex: true,
      },
    ],
    // 顶级导入语句或要求调用之后有一个或多个空行
    "import/newline-after-import": "error",
  },
};
