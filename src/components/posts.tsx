import React, { useMemo } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

interface PostsProps{
    slice?: number
    showYears?: boolean
}
interface PostProps {
    node: any
}

const Posts = ({ slice=5, showYears=true }: PostsProps) => {
    const data:any = useStaticQuery(
        graphql`
        query {
            allMarkdownRemark(sort: { frontmatter: { date: DESC }}) {
              edges {
                node {
                  id
                  excerpt(pruneLength: 250)
                  frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    slug
                    title
                  }
                }
              }
            }
          }
        `
    )
        return(
            <div>
                {
                    data.allMarkdownRemark.edges.map((node:any)=>(
                        <Post key={node.id} node={node} />
                    ))
                }
            </div>
        )
}

const Post = ({ node }: PostProps) => {
    return(
        <div>
             <Link to={node.node.frontmatter.slug} key={node.node.id}>
            <div className='transition duration-200 ease-in-out hover:bg-[#cccccc] hover:text-slate-800 rounded-sm px-2 py-4 flex'>
                        <div className='mr-4'>
                        📝
                        </div>
                        <h2 className='post-href'>
                            {node.node.frontmatter.title}
                        </h2>
            </div>
        </Link>
        </div>
    )
}

export default Posts
