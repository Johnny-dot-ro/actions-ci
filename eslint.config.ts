import tseslint from "typescript-eslint";
import js = require("@eslint/js");
import pluginReact = require("eslint-plugin-react")
import {defineConfig, globalIgnores} from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        plugins: {js},
        extends: ["js/recommended"],
        settings: {
            react: {
                version: "detect"
            }
        }
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    globalIgnores(["node_modules", "build", "dist", "*.config.ts"]),
]);
