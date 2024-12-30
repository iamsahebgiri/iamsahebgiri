import antfu from "@antfu/eslint-config";

export default antfu({
  formatters: true,
  astro: true,
  stylistic: {
    semi: true,
    quotes: "double",
  },
  rules: {
    "perfectionist/sort-imports": [
      "error",
      {
        tsconfigRootDir: ".",
      },
    ],
  },
});
