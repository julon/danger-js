import { DangerResults } from "../../dsl/DangerResults"

export const markdownCode = (string: string): string => `
\`\`\`sh
${string}
\`\`\`
`
export const resultsWithFailure = (failure: string, moreMarkdown?: string): DangerResults => {
  const fail = { message: failure }
  return {
    warnings: [],
    messages: [],
    fails: [fail],
    markdowns: moreMarkdown ? [moreMarkdown] : [],
  }
}

export const mergeResults = (left: DangerResults, right: DangerResults): DangerResults => {
  return {
    warnings: [...left.warnings, ...right.warnings],
    messages: [...left.messages, ...right.messages],
    fails: [...left.fails, ...right.fails],
    markdowns: [...left.markdowns, ...right.markdowns],
  }
}
