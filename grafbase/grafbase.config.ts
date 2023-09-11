import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User',{
  name: g.string().length({min:2, max:20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  blogs: g.relation(() => Blog).list().optional(),
})

const Blog = g.model('Blog',{
  title: g.string(),
  content: g.string(),
})

export default config({
  schema: g
})
