import fs from "fs";

import { config } from "./config";

const main = () => {
  const data = JSON.stringify(config, null, 2);

  if (!data) return;

  fs.writeFile("config.json", data, "utf8", (err) => {
    if (err) {
      console.log(`Error writing file: ${err}`);
    } else {
      console.log(`File is written successfully!`);
    }
  });
};

main();
