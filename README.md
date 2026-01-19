# Phaser TypeScript Template

This repository serves as a boilerplate for developing games using the Phaser framework with TypeScript. It provides a pre-configured setup to help you get started quickly.

## Features

- **Phaser Framework**: A fast, free, and fun open-source HTML5 game framework.
- **TypeScript Support**: Write your game logic with TypeScript for better tooling and type safety.
- **Pre-configured Build Tools**: Includes tools for building and bundling your game.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Bun](https://bun.sh/) (for package management and scripts)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/letumfalx/phaser-typescript-template.git
   ```

2. Navigate to the project directory:

   ```bash
   cd phaser-typescript-template
   ```

3. Install dependencies:

   ```bash
   bun install
   ```

4. Remove the lockfile entries on `.gitignore` to commit it.

### Running the Development Server

Start the development server to preview your game:

```bash
bun dev
```

This will start a local server that watches for file changes.

### Building for Production

To build the game for production:

```bash
bun run build
```

The output will be in the `dist` directory.

## Project Structure

```
phaser-typescript-template/
├── assets/                     # Static game files like images, audio, and spritesheets
│
├── dist/                       # Output directory for the final, minified static files after building
│
├── src/                        # Your primary source code directory
│   │
│   ├── scenes/                     # Individual game states (e.g., MainMenu, Level1, GameOver)
│   │   │
│   │   └── index.ts                    # Central export file to simplify importing scenes into main.ts
│   │
│   ├── index.html                  # The entry point web page that hosts the game canvas
│   │
│   └── main.ts                     # The "brain" of the app; initializes the Phaser.Game instance
│
├── package.json                # Manifest file listing project dependencies and scripts
│
├── README.md                   # Documentation for setup, build instructions, and project info
│
└── tsconfig.json               # Configuration settings for the TypeScript compiler (target, paths, etc.)
```

## TypeScript Configuration

The `tsconfig.json` file is pre-configured to simplify development. It includes path aliases to make importing modules and assets easier. Below is an example of the configured paths:

```json
{
  "compilerOptions": {
    "paths": {
      "@/assets/*": ["./assets/*"],
      "@/*": ["./src/*"]
    }
  }
}
```

### Importing Assets

With the above configuration, you can import assets and modules using the aliases. For example:

```typescript
import backgroundImage from "@/assets/images/background.png";
import MainScene from "@/scenes/MainScene";
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
