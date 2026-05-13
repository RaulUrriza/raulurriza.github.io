import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["assets/js/**/*.js"],
    ignores: ["assets/js/main.min.js", "assets/js/plugins/**"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        Plotly: "readonly",
        $: "readonly",
        jQuery: "readonly",
        fitvids: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "eqeqeq": ["warn", "always", { null: "ignore" }],
      "no-var": "warn",
    },
  },
];
