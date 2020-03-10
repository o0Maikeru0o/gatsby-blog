import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import PostPreview from '../components/post-preview';
import Insta from '../components/insta';
import usePosts from '../hooks/use-posts';
import { Container } from 'theme-ui';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Layout>
        <Hero />
        <Container>
          <PostPreview posts={posts} />
          <Insta />
        </Container>
      </Layout>
    </>
  );
};
