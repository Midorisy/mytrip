import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  pluginVue.configs["flat/essential"],
    // 添加自定义规则（新手友好版）
  {
    files: ["**/*.{js,vue}"],
    rules: {
      // 允许 console.log（开发时有用）
      "no-console": "off",
      // 允许 debugger
      "no-debugger": "off",
      // 允许单文件组件名（不用强制双词）
      "vue/multi-word-component-names": "off",
      // 允许未使用的变量（暂时关闭，适应期过后可开启）
      "no-unused-vars": "warn",
    }
  },
    {
    ignores: [
      "dist",          // 忽略打包输出目录
      "node_modules",  // 忽略依赖目录
      "public",        // 忽略公共资源目录
      "*.config.js"    // 忽略所有配置文件
      // 把原来 .eslintignore 里的内容都放在这里
    ]
  }
]);
