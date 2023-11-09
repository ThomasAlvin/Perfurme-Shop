import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Img,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
export default function LoginPage() {
  const dispatch = useDispatch();
  const [login, setLogin] = useState({});
  const [seePassword, setSeePassword] = useState(false);

  const nav = useNavigate();
  const handleKeyPress = useCallback((event) => {
    if (event.key === "Enter") {
      document.getElementById("submit").click();
    }
  }, []);
  async function submit() {
    const loggingIn = await axios
      .post("http://localhost:2000/admin/login", login)
      .then((res) => {
        localStorage.setItem("auth", JSON.stringify(res.data.token));
        console.log(localStorage.getItem("auth"));
        token = res.data.token;
        return res.data.message;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    const token = JSON.parse(localStorage.getItem("auth"));
    const user = await axios
      .get("http://localhost:2000/auth/v3?token=" + token)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err.message);
      });
    if (user?.email) {
      dispatch({
        type: "login",
        payload: { user },
      });
    }
  }
  function inputHandler(input) {
    const { value, id } = input.target;
    const tempobject = { ...login };
    tempobject[id] = value;
    setLogin(tempobject);
  }
  return (
    <Center flexDir={"column"} gap={"10px"} pt={"30px"} w={"100%"}>
      <Center flexDir={"column"} gap={"80px"}>
        <Center flexDir={"column"}>
          <Center gap={"12px"} flexDir={"column"}>
            <Center
              className={"loginpage-container"}
              flexDir={"column"}
              border={"1px solid #dbdbdb"}
            >
              <Center
                fontSize="2.4rem"
                color="#0060ae"
                fontWeight={700}
                py="30px"
                px="20px"
              >
                Wellness-Event
              </Center>
              <Center flexDir={"column"} className="loginpage-inputs">
                <Input
                  maxLength={32}
                  fontSize={"12px"}
                  bgColor={"#fafafa"}
                  placeholder="Email or Phone Number"
                  pl={"15px"}
                  onChange={inputHandler}
                  id="username"
                ></Input>
                <InputGroup>
                  <Input
                    id="password"
                    onKeyPress={handleKeyPress}
                    maxLength={32}
                    onChange={inputHandler}
                    fontSize={"12px"}
                    type={seePassword ? "text" : "password"}
                    border={"1px #878787 solid"}
                    placeholder="Create your password"
                  ></Input>
                  <InputRightElement width={"2.5rem"} h={"100%"}>
                    <IconButton
                      colorScheme="whiteAlpha"
                      color={"grey"}
                      as={seePassword ? AiOutlineEye : AiOutlineEyeInvisible}
                      w={"24px"}
                      h={"24px"}
                      onClick={() => setSeePassword(!seePassword)}
                      cursor={"pointer"}
                    ></IconButton>
                  </InputRightElement>
                </InputGroup>
                <Button
                  color={"white"}
                  borderRadius={"10px"}
                  id="submit"
                  w={"100%"}
                  colorScheme="facebook"
                  onClick={() => submit()}
                >
                  Login
                </Button>
                <Center gap={"10px"}>
                  <Flex h={"2px"} w={"130px"} bgColor={"blackAlpha.300"}></Flex>
                  <Flex>OR</Flex>
                  <Flex h={"2px"} w={"130px"} bgColor={"blackAlpha.300"}></Flex>
                </Center>
                <Flex gap={"10px"}>
                  <Box fontWeight={"700"} id="signInDiv"></Box>
                </Flex>
                <Flex
                  pb={"24px"}
                  fontSize={"12px"}
                  className="loginpage-forgot-password"
                  // onClick={() => props.nav("/forgot-password/request")}
                >
                  Forgot password?
                </Flex>
              </Center>
            </Center>
            <Center
              className="loginpage-border"
              height={"60px"}
              flexDir={"column"}
              border={"1px solid #dbdbdb"}
              paddingY={"20px"}
            ></Center>
          </Center>
        </Center>
        <Center
          flexWrap={"wrap"}
          className="loginpage-about"
          display={"flex"}
          color={"blackAlpha.700"}
          px={"10px"}
          gap={"20px"}
        >
          <Box fontSize={"13px"} cursor={"pointer"}>
            Meta
          </Box>{" "}
          <Box fontSize={"13px"} cursor={"pointer"}>
            About
          </Box>
          <Box fontSize={"13px"} cursor={"pointer"}>
            Blog
          </Box>
          <Flex fontSize={"13px"} cursor={"pointer"}>
            Jobs
          </Flex>
          <Flex fontSize={"13px"} cursor={"pointer"}>
            Help
          </Flex>
          <Flex fontSize={"13px"} cursor={"pointer"}>
            API
          </Flex>
          <Flex fontSize={"13px"} cursor={"pointer"}>
            Privacy
          </Flex>
          <Flex fontSize={"13px"} cursor={"pointer"}>
            Terms
          </Flex>
          <Flex fontSize={"13px"} cursor={"pointer"}>
            Top Accounts
          </Flex>
          <Flex fontSize={"13px"} cursor={"pointer"}>
            Locations
          </Flex>
          <Flex fontSize={"13px"} cursor={"pointer"}>
            Gramedia Lite
          </Flex>
          <Flex fontSize={"13px"} cursor={"pointer"}>
            Contact Uploading & Non-Users
          </Flex>
          <Flex fontSize={"13px"} cursor={"pointer"}>
            Meta Verified
          </Flex>
        </Center>
      </Center>
      <Center color={"blackAlpha.700"} gap={"20px"}>
        <Flex fontSize={"13px"}> English</Flex>
        <Flex fontSize={"13px"}> © 2023 Gramedia from Meta</Flex>
      </Center>
    </Center>
  );
}
