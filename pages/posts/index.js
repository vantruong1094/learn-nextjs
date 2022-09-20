import React from 'react';
import { getListPost } from '../../services/posts'

function ListPostPage ({ posts }) {
  return (
    <>
        <h1>List Post</h1>
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.body}</li>
            ))}

        </ul>
    </>

  )
}

// export async function getStaticProps() {
 
//   const posts = await getListPost()
//   console.log(posts)
//   return {
//     props: {
//       posts
//     }
//   }
// }

export const getStaticProps = async () => {
  const posts = await getListPost()
  return {
    props: {
      posts,
    }
  }
}


export default ListPostPage
