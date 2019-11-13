import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import styled from 'styled-components'

const blog = () => {
  const data: PageQueryData = useStaticQuery(pageQuery)
  const siteTitle: string = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout title={siteTitle}>
      <Head title="All posts" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <article>
        <div className={`page-content`}>
          {posts.map(({node}) => {
            return <PostPanel key={node.fields.slug} post={node} />
          })}
        </div>
      </article>
    </Layout>
  )
}

const PostContainer = styled.div`
  background: #555;
  transition: background 300ms;
  border-radius: 15px;
  box-shadow: 2px 2px 4px black;

  &:hover {
    background: #254f61;
  }
  a {
    text-decoration: none;
    small {
      display: block;
      margin-top: 12px;
      font-family: 'Lexand Deca', Helvetica, Arial, sans-serif;
    }
    h3 {
      display: inline;
      border-bottom: 2px solid transparent;
      transition: all 300ms;
    }
    &:hover {
      h3 {
        border-color: #ddd;
      }
    }
  }
`

interface PostPanelProps {
  post: PostData
}

const PostPanel = (props: PostPanelProps) => (
  <PostContainer>
    <Link to={props.post.fields.slug}>
      <div style={{padding: 10, paddingTop: 30, margin: 20}}>
        <h3>{props.post.frontmatter.title || props.post.fields.slug}</h3>
        <small>{props.post.frontmatter.date}</small>
        <p>{props.post.excerpt}</p>
      </div>
    </Link>
  </PostContainer>
)

interface PostData {
  excerpt: string
  fields: {
    slug: string
  }
  frontmatter: FrontMatter
}

interface FrontMatter {
  date: string
  title: string
}

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: PostData
    }[]
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {frontmatter: {published: {ne: false}}}
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
export default blog
