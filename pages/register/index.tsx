import {
  Container,
  Flex,
  Box,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

import styles from "./RegisterPage.module.scss";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const toast = useToast();

  const handlerChangeEmail = (email: string) => {
    setEmail(email);
  };

  const handlerChangePassword = (password: string) => {
    setPassword(password);
  };

  const onClickedRegsiter = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    toast({
      title: "Register successful!",
      position: "top-right",
      status: "success",
      isClosable: true,
    });
    router.push("/login");
  };

  return (
    <Box w={"100%"} h="100vh" background="rgba(234, 234, 233, 0.978)">
      <Flex h={"100%"} alignItems={"center"} justifyContent="center">
        <Box background={"white"} className={styles.registerContainer}>
          <VStack spacing={"1rem"} pb="2rem" px="2rem">
            <Text pt="1rem" fontSize={"24px"} fontWeight="semibold">
              Register
            </Text>
            <Box w="22rem">
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Email"
                  fontSize={"14px"}
                  className={styles.formInput}
                  onChange={(event) => handlerChangeEmail(event.target.value)}
                />
              </FormControl>
            </Box>
            <Box w="22rem">
              <FormControl>
                <FormLabel>Passsword</FormLabel>
                <Input
                  placeholder="Password"
                  type={"password"}
                  fontSize={"14px"}
                  onChange={(event) =>
                    handlerChangePassword(event.target.value)
                  }
                />
              </FormControl>
            </Box>
            <Button
              colorScheme={"blue"}
              width="10rem"
              onClick={onClickedRegsiter}
            >
              Register
            </Button>
            <Divider orientation="horizontal" />
            <VStack spacing={"4px"}>
              <Link href="/login">
                <Text fontSize={"14px"} color="blue">
                  Login
                </Text>
              </Link>
            </VStack>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default RegisterPage;
