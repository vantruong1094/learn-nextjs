import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'
import { getPostById, getPostIds } from '../../services/posts'
import style from "../../styles/PostDetailPage.module.scss"

function PostDetail({ post }) {
  return (
    <Layout>
        <div className={style.rootContainer}>
            <div className={style.contentLeft}>
                <img src={post.urlImage} />
            </div>
            <div className={style.contentRight}>
                <h1>{post.title}</h1>
                <p>{`Post is ${post.content}`}</p>
            </div>
        </div>
        
    </Layout>
  )
}

export const getStaticPaths = async () => {

    const paths = await getPostIds()

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {

    const post = await getPostById(context.params.id)

    return {
        props: {
            post,
        }
    }
}



export default PostDetail