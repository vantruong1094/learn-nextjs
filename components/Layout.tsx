import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import HeadApp from "./HeadApp";

const Layout = ({ children }: any) => {
  return <Container>

    <HeadApp/>
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
