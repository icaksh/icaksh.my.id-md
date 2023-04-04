import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

interface BlogPostTemplateProps {
    data: any
}

const BlogPostTemplate = ({ data: { markdownRemark } }: BlogPostTemplateProps) => {
  console.log(markdownRemark)
  const { frontmatter, html } = markdownRemark;
  console.log(html)
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div className="prose max-w-max" dangerouslySetInnerHTML={{ __html: html }}>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;

export default BlogPostTemplate