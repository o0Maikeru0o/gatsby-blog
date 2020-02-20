import React from 'react';
import Image from 'gatsby-image';
import { Styled, Flex } from 'theme-ui'
import useInstagram from '../hooks/use-instagram';

const Insta = () => {
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];

  return (
    <>
      <h2>Instagram posts from @{username}</h2>
      <Flex>
        {instaPhotos.map(photo => (
          <Styled.a
            href={`https://instagram.com/p/${photo.id}/`}>
            <Image
              key={photo.id}
              fluid={photo.fluid}
              alt={photo.caption}
            />
          </Styled.a>
        ))}
      </Flex>
      <Styled.a href={`https://instagram.com/${username}`}>
        See more on Instagram &rarr;
      </Styled.a>
    </>
  );
};

export default Insta;
