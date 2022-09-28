import Head from "next/head";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";

const Layout = ({ children }: any) => {
  return <Container>
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <title>My Blog Page</title>
    </Head>

    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="px-3">
            <Nav.Link href="/">My Blog</Nav.Link>
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/posts">Posts</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar>
    </header>

    <main>{children}</main>
  </Container>
}

export default Layout;
