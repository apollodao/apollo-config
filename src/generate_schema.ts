import * as tsj from "ts-json-schema-generator";
import fs from "fs";

const main = () => {
  const config = {
    path: "types.ts",
    tsconfig: "tsconfig.json",
    type: "NetworkConfig",
  };

  const generator = tsj.createGenerator(config);
  const schema = generator.createSchema(config.type);
  const data = JSON.stringify(schema, null, 2);

  if (!data) return;

  fs.writeFile("config_schema.json", data, "utf8", (err) => {
    if (err) {
      console.log(`Error writing file: ${err}`);
    } else {
      console.log(`File is written successfully!`);
    }
  });
};

main();
