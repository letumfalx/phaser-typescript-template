# Phaser Vite TypeScript Template

This repository is an improved and extended version of [template-vite-ts](https://github.com/phaserjs/template-vite-ts), tailored for a more opinionated development experience.

## Improvements and Features

This template includes a modern and strict development tool configuration:

- **Linting and Formatting**:
  - `eslint`: Configured with:
    - Flat config
    - Recommended ESLint rules
    - Strict `typescript-eslint` rules
  - `stylelint`: Configured with:
    - Standard Stylelint rules
    - Ordered stylelint configuration
  - `prettier`: Enhanced with:
    - `prettier-plugin-organize-imports` for auto-sorting imports
    - `prettier-plugin-jsdoc` for well-formatted documentation comments
    - Opinionated settings: `trailingComma: es5` and `endOfLine: lf`
- **TypeScript**:
  - A strict `tsconfig` for improved type safety and maintainability.

### Additional Tools

- **Husky**:
  - Automatically runs Git LFS hooks.
  - Formats staged files with Prettier before committing.
- **Git LFS**:
  - Used for storing large binary assets (e.g., `.png`, `.jpg`).

> **Note:** Most asset files (e.g., images) are stored in Git LFS. Ensure you have it installed and configured.

---

## Requirements

You can use either [Node.js](https://nodejs.org) or [Bun](https://bun.sh/) to manage dependencies and run scripts. To use `bun` instead of `node`, update the [pre-commit](./.husky/pre-commit) script to reference `bun`.

Additionally:

- Ensure you configure the appropriate `lock` file for your chosen package manager:
  - Uncomment the relevant lock file in the `.gitignore` file to commit it (e.g., `package-lock.json`, `bun.lockb`).

---

## Getting Started

1. Clone this repository:

```bash
git clone https://github.com/letumfalx/phaser-typescript-template <project-directory>
cd <project-directory>
```

2. Install dependencies:

```bash
# Using Node.js
npm install

# OR using Bun
bun install
```

3. Start the development server:

```bash
# Using Node.js
npm run dev

# OR using Bun
bun run dev
```

## Writing Code and Configuration

For guidance on using Phaser, refer to the [original template's documentation](https://github.com/phaserjs/template-vite-ts).

## Contributions

If you find or have suggestions, feel free to open a pull request or issue. Contributions are welcome!

## License

This repository is licensed under the MIT license. See [LICENSE](./LICENSE).
