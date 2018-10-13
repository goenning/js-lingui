// @flow
import fs from "fs"

import type { MessageCatalogFormat } from "../types"

const format: MessageCatalogFormat = {
  catalogExtension: ".json",

  write(filename, catalog) {
    fs.writeFileSync(filename, JSON.stringify(catalog, null, 2))
  },

  read(filename) {
    const raw = fs.readFileSync(filename).toString()

    try {
      return JSON.parse(raw)
    } catch (e) {
      console.error(`Cannot read ${filename}: ${e.message}`)
      return null
    }
  }
}

export default format
