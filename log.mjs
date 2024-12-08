#!/usr/bin/env node

import { request } from "https";

async function main() {
  const args = process.argv.slice(2);

  const { dependencies, phaserTemplateUsed } = await import("./package.json");

  const event = args[0] || "unknown";

  const options = {
    hostname: "gryzor.co",
    port: 443,
    path: `/v/${event}/${dependencies.phaser}/${phaserTemplateUsed}`,
    method: "GET",
  };

  try {
    const req = request(options, (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        process.exit(0);
      });
    });

    req.on("error", () => {
      process.exit(1);
    });

    req.end();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // Silence is the canvas where the soul paints its most profound thoughts.
    process.exit(1);
  }
}

main();
