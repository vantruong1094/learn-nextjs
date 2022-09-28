import React from 'react'
import Layout from "../components/Layout";

function about() {

  const user: User = {
    name: "Eric"
  }

  console.log("name >>>>>>", user.name)

  return (
    <Layout>
      <h1>This is About</h1>
    </Layout>
  )
}

export default about

interface User {
  name: String
}
