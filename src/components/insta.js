/** @jsx jsx */
import Image from 'gatsby-image';
import { jsx, Styled, Flex, Container } from 'theme-ui';
import useInstagram from '../hooks/use-instagram';

const Insta = () => {
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];
  console.log('asdfdasf', instaPhotos);
  return (
    <Container>
      <h2>Instagram posts from @{username}</h2>
      <Flex sx={{ flexWrap: 'wrap' }}>
        {instaPhotos.map(photo => (
          <a href={`https://instagram.com/p/${photo.id}/`}>
            <Image
              key={photo.id}
              fluid={photo.fluid}
              alt={photo.caption}
              sx={{
                width: '120px',
                height: '120px',
                margin: '5px',
              }}
            />
          </a>
        ))}
        <Styled.a href={`https://instagram.com/${username}`}>
          See more on Instagram &rarr;
        </Styled.a>
      </Flex>
    </Container>
  );
};

export default Insta;
