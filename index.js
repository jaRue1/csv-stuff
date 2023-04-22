import { exportCsv } from "./csv-exporter.js"
import { exportDataToJson } from "./json-export.js"

async function main() {
  await exportCsv("./data.txt", "./exports/export.csv")
  await exportDataToJson("./data.txt", "./exports/export.json")
  return "export complete"
}

async function run() {
  const result = await main()
  console.log(result)
}

run()
