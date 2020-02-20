import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Styled, Box } from 'theme-ui'
import BackgroundImage from 'gatsby-background-image';

// const ImageBackground = Styled(BackgroundImage)`
//   background-position: center 50% center;
//   background-size: cover;
//   height: 30vh;

//   /* override the default margin for sibling elements  */
//   + * {
//     margin-top: 0;
//   }
// `;

// const TextBox = styled('div')`
//   background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   justify-content: flex-end;
//   padding: 0 5vw 2rem;
//   width: 100%;

//   @media (min-width: calc(550px + 10vw)) {
//     padding-left: calc((100vw - 550px) / 2);
//     padding-right: calc((100vw - 550px) / 2);
//   }

//   h1 {
//     text-shadow: 1px 1px 3px #eeddff66;
//     font-size: 2.25rem;
//   }

//   p,
//   a {
//     color: #222;
//     margin-top: 0;
//   }

//   a {
//     margin-top: 0.5rem;
//   }
// `;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "mike-c-valdivia-mn.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <Box>
        <h1>Frontend Masters + Gatsby &hearts;</h1>
        <p>
          Hello NYC! <Link to="/about/">Learn about me &rarr;</Link>
        </p>
      </Box>
    </BackgroundImage>
  );
};

export default Hero;
