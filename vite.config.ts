import { defineConfig } from "vite-plus";
import vue from "@vitejs/plugin-vue";
import vueRouter from "vue-router/vite";
import vueLayouts from "vite-plugin-vue-layouts";
import ui from "@nuxt/ui/vite";

// https://vitejs.dev/config/
export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  lint: {
    plugins: ["oxc", "typescript", "unicorn", "react", "vue"],
    categories: {
      correctness: "warn",
    },
    env: {
      builtin: true,
    },
    rules: {
      "@typescript-eslint/ban-ts-comment": "error",
      "no-array-constructor": "error",
      "@typescript-eslint/no-duplicate-enum-values": "error",
      "@typescript-eslint/no-empty-object-type": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-extra-non-null-assertion": "error",
      "@typescript-eslint/no-misused-new": "error",
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-this-alias": "error",
      "@typescript-eslint/no-unnecessary-type-constraint": "error",
      "@typescript-eslint/no-unsafe-declaration-merging": "error",
      "@typescript-eslint/no-unsafe-function-type": "error",
      "no-unused-expressions": "error",
      "no-unused-vars": "error",
      "@typescript-eslint/no-wrapper-object-types": "error",
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/prefer-namespace-keyword": "error",
      "@typescript-eslint/triple-slash-reference": "error",
      "vue/no-arrow-functions-in-watch": "error",
      "vue/no-deprecated-destroyed-lifecycle": "error",
      "vue/no-export-in-script-setup": "error",
      "vue/no-lifecycle-after-await": "error",
      "vue/prefer-import-from-vue": "error",
      "vue/valid-define-emits": "error",
      "vue/valid-define-props": "error",
      "vue/no-multiple-slot-args": "warn",
      "vue/no-required-prop-with-default": "warn",
    },
    overrides: [
      {
        files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
        rules: {
          "constructor-super": "off",
          "getter-return": "off",
          "no-class-assign": "off",
          "no-const-assign": "off",
          "no-dupe-class-members": "off",
          "no-dupe-keys": "off",
          "no-func-assign": "off",
          "no-import-assign": "off",
          "no-new-native-nonconstructor": "off",
          "no-obj-calls": "off",
          "no-redeclare": "off",
          "no-setter-return": "off",
          "no-this-before-super": "off",
          "no-undef": "off",
          "no-unreachable": "off",
          "no-unsafe-negation": "off",
          "no-var": "error",
          "no-with": "off",
          "prefer-const": "error",
          "prefer-rest-params": "error",
          "prefer-spread": "error",
        },
      },
      {
        files: ["*.vue", "**/*.vue"],
        rules: {
          "no-undef": "off",
        },
      },
    ],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  plugins: [
    vueRouter({
      dts: "src/route-map.d.ts",
    }),
    vueLayouts(),
    vue(),
    ui({
      ui: {
        colors: {
          primary: "green",
          neutral: "zinc",
        },
      },
    }),
  ],
});
