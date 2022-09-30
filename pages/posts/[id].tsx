import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import { getPostById, getPostIds } from "../../services/posts";
import style from "../../styles/PostDetailPage.module.scss";
import { IPost } from "../../interfaces/IPost";
import { InferGetStaticPropsType, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Image, Text } from "@chakra-ui/react";

type Props = {
  post: IPost;
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

function PostDetail({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className={style.rootContainer}>
        <div className={style.contentLeft}>
          <img src={post.urlImage} alt="" />
        </div>
        <div className={style.contentRight}>
          <Text fontSize={"28px"} fontWeight="semibold" paddingBottom={"1rem"}>
            {post.title}
          </Text>
          <p>{`Post is ${post.content}`}</p>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const paths = await getPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, IParams> = async (
  context
) => {
  const params = context.params as IParams;
  const post = await getPostById(params.id);

  return {
    props: {
      post,
    },
  };
};

export default PostDetail;
