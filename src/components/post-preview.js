// import React from 'react';
/** @jsx jsx */
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { Styled, Flex, Box, jsx } from 'theme-ui';


const PostPreview = ({ posts }) => (
  <ul
    sx={{
      listStyle: 'none',
      m: 0,
      px: 3,
      py: 4,
    }}>
    {posts.map(post => (
      <li key={post.id}
        sx={{
          mb: 4,
        }}>
        <Flex key={post.id} as="article">

          <Image
            fluid={post.image.sharp.fluid}
            alt={post.title}
            sx={{
              marginRight: '1rem',
              width: "100px",
              height: "100px",
            }}
          />
          <Box>
            <Styled.h2
              sx={{
                m: 0,
              }}>
              <Link to={post.slug}
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  ':hover,:focus': {
                    color: 'primary',
                    textDecoration: 'underline',
                  }
                }}>
                {post.title}
              </Link>
            </Styled.h2>
            <small sx={{ fontWeight: 'bold' }}>{post.date}</small>
            <Styled.p>
              {post.excerpt}
            </Styled.p>
          </Box>
        </Flex>
      </li>
    ))}
  </ul>

  // <article
  //   css={css`
  //     border-bottom: 1px solid #ddd;
  //     display: flex;
  //     margin-top: 0;
  //     padding-bottom: 1rem;

  //     :first-of-type {
  //       margin-top: 1rem;
  //     }
  //   `}
  // >
  //   <Link
  //     to={post.slug}
  //     css={css`
  //       margin: 1rem 1rem 0 0;
  //       width: 100px;
  //     `}
  //   >
  //     <Image
  //       css={css`
  //         * {
  //           margin-top: 0;
  //         }
  //       `}
  //       fluid={post.image.sharp.fluid}
  //       alt={post.title}
  //     />
  //   </Link>
  //   <div>
  //     <h3>
  //       <Link to={post.slug}>{post.title}</Link>
  //     </h3>
  //     <p>{post.excerpt}</p>
  //     <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
  //   </div>
  // </article>
);

export default PostPreview;
