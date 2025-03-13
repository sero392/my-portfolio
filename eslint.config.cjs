import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)), // Tek satırda tanımla
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

export default eslintConfig;