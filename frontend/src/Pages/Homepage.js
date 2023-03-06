import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import { Flex } from '@chakra-ui/react'

function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) navigate("/chats");
  }, [navigate]);

  return (
    <Container maxW="xl" centerContent>
      <Flex
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        className="chat-app"
      >
        <Text fontSize="4xl" fontFamily="Work sans" fontWeight="bold">
          Chat App
        </Text>
      </Flex>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" className="chat-app">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab _selected={{ background: '#b2b4bc' }}>Login</Tab>
            <Tab _selected={{ background: '#b2b4bc' }}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
