/** @jsx jsx */
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import NavLink from '../components/nav-link';
import { jsx, Container } from 'theme-ui';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <Layout>
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <p>Posted by {post.frontmatter.author}</p>
        <Image fluid={featuredImgFluid} alt={post.title} />
        <MDXRenderer>{post.body}</MDXRenderer>
        <NavLink to="/">&larr; back to all posts</NavLink>
      </Container>
    </Layout>
  );
};
export default PostTemplate;
