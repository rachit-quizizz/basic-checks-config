import pluginVue from 'eslint-plugin-vue';
export default [
  // add more generic rulesets here, such as:
  // js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      // override/add rules settings here, such as:
      semi: "warn",
      "prefer-const": "error",
      'no-unused-vars': 'error',
      'vue/max-attributes-per-line': "warn",
      'vue/html-indent': ['warn', 2],
    }
  },
];