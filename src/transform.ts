/**
 * Convert ASCII art to HTML comments
 */
export function toHtmlComment(art: string, tabSize = 4): string {
  const lines = art.split('\n')
  const indent = ' '.repeat(tabSize)
  const htmlIndent = ' '.repeat(2)

  const start = lines.findIndex(line => line.trim())
  if (start === -1)
    return `\n${htmlIndent}<!--\n${htmlIndent}-->\n`

  let end = lines.length - 1
  while (end >= 0 && !lines[end].trim()) end--

  const nonEmptyLines = lines.slice(start, end + 1).filter(line => line.trim())
  const minIndent = Math.min(...nonEmptyLines.map((line) => {
    const match = line.match(/^\s*/)
    return match ? match[0].length : 0
  }))

  const commentLines = lines.slice(start, end + 1)
    .map((line) => {
      if (line.trim()) {
        line = line.substring(minIndent)
      }
      return `${indent}${line}`
    })
    .join('\n')

  return `\n${htmlIndent}<!--\n${commentLines}\n${htmlIndent}-->`
}
