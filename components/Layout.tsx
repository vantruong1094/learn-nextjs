import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Flex, Box, Spacer, Text, HStack } from "@chakra-ui/react";
import HeadApp from "./HeadApp";
import { useRouter } from "next/router";
import { useState } from "react";

const Layout = ({ children }: any) => {
  const router = useRouter();

  const AuthenticationComponent = () => {
    return (
      <HStack spacing={"8px"}>
        <Nav.Link href="/register">
          <Text color={"white"}>Register</Text>
        </Nav.Link>
        <Text color={"white"}>/</Text>
        <Nav.Link href="/login">
          <Text color={"white"}>Login</Text>
        </Nav.Link>
      </HStack>
    );
  };

  const handlerClickLogout = () => {
    localStorage.setItem("isLogined", "false");
    router.push("/login");
  };

  return (
    <Container>
      <HeadApp />
      <header>
        <Flex bg={"blackAlpha.900"} py={4} px={6}>
          <HStack spacing={"16px"}>
            <Nav.Link href="/">
              <Text color={"white"}>My Blog</Text>
            </Nav.Link>
            <Nav.Link href="/about">
              <Text color={"white"}>About</Text>
            </Nav.Link>
          </HStack>
          <Spacer />
          <AuthenticationComponent />
        </Flex>
      </header>

      <main>{children}</main>
    </Container>
  );
};

export default Layout;
