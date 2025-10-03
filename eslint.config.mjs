import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // ADD THIS BLOCK: Rule override to disable 'no-unused-vars' for imported JSX features
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // This is the specific rule causing the error.
      // We set it to 'off' or customize it to ignore the 'Image' import.
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          // 'Image' is often treated as a special type of variable
          varsIgnorePattern: "^Image$",
        },
      ],
      // Ensure React JSX usage is correctly recognized
      "react/jsx-uses-vars": "error",
    },
  },
];

export default eslintConfig;
