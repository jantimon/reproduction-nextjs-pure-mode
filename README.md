# Next.js CSS Modules Global Styling Reproduction

This is a minimal reproduction example demonstrating the need for the `cssmodules-pure-no-check` directive in Next.js projects when using CSS Modules

## Problem

When migrating from CSS-in-JS solutions to CSS Modules in Next.js, certain global styling patterns become difficult to implement due to CSS Modules mode

Although this happens only in edge cases, it would be helpful to bypass the default linting behaviour in these cases

## Reproduction Steps

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser
5. Observe that the global styling features don't work as expected: ![pure-error once view-transition styles are used](https://github.com/user-attachments/assets/5d69b1c7-81e8-486c-9d6d-707804455681)


## The Issue

CSS Modules in Next.js currently uses older versions of:
- `postcss-modules-local-by-default` (< v4.2.0)
- `lightningcss` (< v1.29.3)

These older versions don't support the `cssmodules-pure-no-check` directive, which would allow developers to mark specific CSS rules as global, bypassing the default CSS Modules scoping.

## Expected Solution

Next.js should upgrade its dependencies to support the `cssmodules-pure-no-check` directive:

```diff
// package.json
{
  "dependencies": {
-   "postcss-modules-local-by-default": "4.0.0",
+   "postcss-modules-local-by-default": "4.2.0",
-   "lightningcss": "1.22.0",
+   "lightningcss": "1.29.3"
  }
}
```

This would allow developers to use the `cssmodules-pure-no-check` directive in their CSS Modules files:

```css
/* Local component styles */
.myComponent {
  color: blue;
}

/* Global styles that need to bypass CSS Modules scoping */
/* cssmodules-pure-no-check */
:root {
  --global-variable: #333;
}
```

## Additional Notes

This pattern mirrors established escape hatches in other tools:
- `@ts-nocheck` in TypeScript
- `/* eslint-disable */` in ESLint
- `// @ts-ignore` for specific lines in TypeScript

The `cssmodules-pure-no-check` directive provides a similar escape hatch for CSS Modules when global styling is legitimately needed.
