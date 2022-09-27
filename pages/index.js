import React from "react";
import { getListPost } from "../services/posts";
import Layout from "../components/Layout";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImagePost from "../components/image/ImagePost";
import style from "../styles/Text.module.scss"
import { useRouter } from "next/router";

function ListPostPage({ posts }) {

  const router = useRouter()

  const goToDetailPost = (postId) => {
    const path = "/posts/" + postId
    router.push(path)
  }

  return (
    <Layout>
      <Row md={3} xs={1}>
        {posts.map((post) => (
          <Col key={post.id}>
            <Card
              className="my-2 shadow rounded bg-white border-0"
              
            >
              <ImagePost src={post.urlImage} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text className={style.maxLine4}>{post.content}</Card.Text>
                <Button variant="primary" onClick={() => goToDetailPost(post.id)}>Detail</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getListPost();
  return {
    props: {
      posts,
    },
  };
};

export default ListPostPage;
