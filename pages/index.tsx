import React from "react";
import { getListPost } from "../services/posts";
import Layout from "../components/Layout";
import ImagePost from "../components/image/ImagePost";
import style from "../styles/Text.module.scss";
import { useRouter } from "next/router";
import { InferGetStaticPropsType } from "next";
import { IPost } from "../interfaces/IPost";
import { Wrap, WrapItem, Box, Text } from "@chakra-ui/react";
import { Grid, GridItem, Container, Tag } from "@chakra-ui/react";

function ListPostPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  const goToDetailPost = (postId: string) => {
    const path = "/posts/" + postId;
    router.push(path);
  };

  return (
    <Layout>
      <Grid templateColumns="repeat(3, 1fr)" gap={4} paddingY={6}>
        {posts.map((post) => (
          <GridItem
            style={{ cursor: "pointer" }}
            key={post.id}
            onClick={() => goToDetailPost(post.id)}
          >
            <Box boxShadow="0 4px 8px 4px rgba(0, 0, 0, 0.1)" borderRadius={6}>
              <ImagePost urlImage={post.urlImage} />
              <Container py="1rem">
                <Tag
                  fontWeight={"semibold"}
                  borderRadius={"full"}
                  px={"12px"}
                  py="8px"
                >
                  {post.category}
                </Tag>
                <Text fontSize={24} fontWeight="semibold">
                  {post.title}
                </Text>
                <Text noOfLines={4}>{post.content}</Text>
              </Container>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts: IPost[] = await getListPost();
  return {
    props: {
      posts,
    },
  };
};

export default ListPostPage;
