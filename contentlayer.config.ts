import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
    slug: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [BlogPost],
}); 