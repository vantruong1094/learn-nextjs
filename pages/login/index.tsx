import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import {
  Box,
  Container,
  Center,
  VStack,
  Text,
  Button,
  Link,
  useToast,
} from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Divider } from "@chakra-ui/react";
import styles from "./Login.module.scss";
import { useRouter } from "next/router";

function LoginPage() {
  const [isLoading, setLoading] = useState(false);
  const [isEnableButton, setEnableButton] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const toast = useToast();

  const handlerClickLogin = () => {
    setLoading(true);

    const localEmail = localStorage.getItem("email");
    const localPassword = localStorage.getItem("password");
    console.log("info >>>> ", email, " --- ", password);

    setTimeout(() => {
      if (email === localEmail && password === localPassword) {
        toast({
          title: "Login successful!",
          position: "top-right",
          status: "success",
          isClosable: true,
        });
        localStorage.setItem("isLogined", "true");
        router.push("/");
      } else {
        toast({
          title: "Login fail!",
          position: "top-right",
          status: "error",
          isClosable: true,
        });
      }

      setLoading(false);
    }, 1000);
  };

  const canEnableButton = () => {
    const value = email.trim().length > 0 && password.trim().length > 0;
    console.log("canEnableButton >>> ", value);
    setEnableButton(value);
  };

  useEffect(() => canEnableButton());

  return (
    <div className={styles.rootContainer}>
      <Center h={"100%"}>
        <Box className={styles.loginContainer} bg="white">
          <VStack spacing={"1rem"} pb="2rem" px="2rem">
            <Text pt="1rem" fontSize={"24px"} fontWeight="semibold">
              Login
            </Text>
            <Box w="22rem">
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </FormControl>
            </Box>
            <Box w="22rem">
              <FormControl>
                <FormLabel>Passsword</FormLabel>
                <Input
                  placeholder="Password"
                  type={"password"}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </FormControl>
            </Box>
            <Button
              isLoading={isLoading}
              colorScheme={"blue"}
              width="10rem"
              onClick={handlerClickLogin}
              disabled={!isEnableButton}
            >
              Login
            </Button>
            <Divider orientation="horizontal" />
            <VStack spacing={"4px"}>
              <Link href="/register">
                <Text fontSize={"14px"} color="blue">
                  Register
                </Text>
              </Link>
              <Link>
                <Text fontSize={"14px"} color="blue">
                  Forget password
                </Text>
              </Link>
            </VStack>
          </VStack>
        </Box>
      </Center>
    </div>
  );
}

export default LoginPage;
