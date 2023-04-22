import * as fs from "fs"

export function exportCsv(inputPath, outputPath) {
  console.log("Shopify Exporter Initialized")

  // Read the input text file
  const inputText = fs.readFileSync(inputPath, "utf-8")
  console.log("reading input.txt file")

  // Split the input text into lines
  const lines = inputText.split("\n")

  // Initialize the output CSV
  let outputCsv = "Handle,Title,Body (HTML),Vendor,Type,Tags"
  console.log("Initialized outputCsv")

  // Process each line and add it to the output CSV
  // tag;title;Option1Value;variantPrice;option1Name
  for (const [index, line] of lines.entries()) {
    const [rawTags, rawTitle] = line.split(";")
    //clean data
    const tags = rawTags
    const formatTitle = rawTitle.toLowerCase()
    // format titles
    const title = formatTitle

    // Generate a handle from the titleproductCategory
    const handle = title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
    // Grab the first two letters from title
    let category = tags.substring(0, 2).toLocaleUpperCase()
    console.log("category:", category, "title:", title, "line #:", index)

    // Set the other fields to empty values
    const body = ""
    const vendor = "enterprise"
    // Dynamically assign category
    const type = ""

    // Add the current line to the output CSV
    outputCsv += `${handle},${title},${body},${vendor},${type},${tags}\n`
  }

  // Write the output CSV to a file
  fs.writeFileSync(outputPath, outputCsv) // for testing
  console.log("Export to output.csv complete.")
}
