import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";

import React, { useEffect } from "react";

export default function HRDashboard() {
  const userSelector = useSelector((state) => state.login.auth);

  useEffect(() => {
    axios
      .get("http://localhost:2000/event/HR/" + userSelector.id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <Box mx="200px" borderX={"solid #2c5282 2px"}>
      <Flex bgColor="#9fc3fc" px="40px" py="20px" flexDir={"row-reverse"}>
        {" "}
        <Flex alignItems={"center"} gap={"10px"}>
          <Flex color={"white"} fontWeight={"700"} fontSize={"1.3rem"}>
            User
          </Flex>
          <Menu>
            <MenuButton colorScheme="blue">
              <Avatar border={"solid #2c5282 2px"}></Avatar>
            </MenuButton>
            <MenuList>
              <MenuItem fontSize={"1.2rem"} as="a" href="#">
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <div>
        <Flex>
          <Flex
            px="30px"
            w={"100%"}
            borderBottom={"2px solid #787875"}
            pb={"10px"}
          >
            <Flex
              alignItems={{ base: "flex-start", lg: "center" }}
              w={"100%"}
              flexDir={{ base: "column", lg: "row" }}
              gap={3}
              p={{ base: 3, lg: 0 }}
            >
              <Flex flexDir={"column"}>
                <Flex
                  fontSize={"1.2rem"}
                  fontWeight={"700"}
                  width={"200px"}
                  color={"#2c5282"}
                >
                  {"Welcome, " + "user"}
                </Flex>
                <Flex fontSize={"0.8rem"} fontWeight={"600"} color={"#787875"}>
                  {"This is The " + "The Dashboard!"}
                </Flex>
              </Flex>

              <Center
                w={"100%"}
                fontWeight={"600"}
                color={"#787875"}
                fontSize={"1.2rem"}
              >
                This is where you can see orders from different branches and
                edit them
              </Center>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <TableContainer w="100%">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Event</Th>
                  <Th>Vendor</Th>
                  <Th>Status</Th>
                  <Th>View</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>Gymness</Td>
                  <Td>Gramedia</Td>
                  <Td>Pending</Td>
                  <Td>
                    <Button>View details</Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </div>
      <div></div>
    </Box>
  );
}
