// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (doc) => `/docs/${doc._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'docs', documentTypes: [Doc] })
