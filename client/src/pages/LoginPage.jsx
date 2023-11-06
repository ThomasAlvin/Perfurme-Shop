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
import React from "react";

export default function LoginPage() {
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
                  // onChange={props.inputHandler}
                  id="emus"
                ></Input>
                <InputGroup>
                  <Input
                    id="password"
                    // onKeyPress={props.handleKeyPress}
                    maxLength={32}
                    // onChange={props.inputHandler}
                    fontSize={"12px"}
                    // type={props.seePassword ? "text" : "password"}
                    border={"1px #878787 solid"}
                    placeholder="Create your password"
                  ></Input>
                  <InputRightElement width={"2.5rem"} h={"100%"}>
                    <IconButton
                      colorScheme="whiteAlpha"
                      color={"grey"}
                      // as={
                      //   props.seePassword
                      //     ? props.AiOutlineEye
                      //     : props.AiOutlineEyeInvisible
                      // }
                      w={"24px"}
                      h={"24px"}
                      // onClick={() => props.setSeePassword(!props.seePassword)}
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
                  // onClick={() => submitLogin()}
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
            >
              <Flex fontSize={"14px"}>
                Don't Have An Account?{" "}
                <Flex
                  fontSize={"14px"}
                  color={"#0060ae"}
                  cursor={"pointer"}
                  // onClick={() => nav("/register")}
                >
                  &nbsp;Sign Up
                </Flex>
              </Flex>
            </Center>
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
