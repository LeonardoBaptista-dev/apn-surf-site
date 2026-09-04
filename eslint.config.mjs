import { defineConfig } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";

export default defineConfig([
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "docs/**"],
  },
  nextPlugin.configs["core-web-vitals"],
]);
