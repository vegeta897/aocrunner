import type { Setup } from "../types/common"
import { stripIndent } from "common-tags"

const gitignoreTXT = ({ language }: Setup) => {
  return stripIndent`
    node_modules
    *.temp.*
    */**/*.temp.*
    *.log
    */**/*.log
    .idea
    .vscode
    ${language === "ts" ? "lib" : ""}
  `
}

export default gitignoreTXT
