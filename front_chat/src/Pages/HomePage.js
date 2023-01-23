import { Container, 
        Box, 
        Text, 
        Tabs, 
        TabList, 
        TabPanels, 
        Tab, 
        TabPanel } from "@chakra-ui/react";
import  Login      from "../component/Authentication/Login";
import  Signup     from "../component/Authentication/Signup";

const HomePage = () => {
  return <Container maxW="xl" centerContent>
    <Box
      d=              "flex"
      alignItems=     "center"
      p=              {3}
      bg=             {"white"}
      w=              "100%"
      m=              "40px 0 15px 0"
      borderRadious=  "lg"
      borderWidth=    "1px"
    >
      <Text 
        fontSize=   "4xl" 
        fontFamily= "Work sans" 
        color=      "black"
      >Talk-A-Tive
      </Text>
    </Box>

    <Box
      bg=           "white"
      w=            "100%"
      p=            {4}
      borderRadius= "lg"
      borderWidth=  "1px"
    >
      <Tabs 
        variant= "soft-rounded">
        <TabList>
          <Tab width="50%">Login  </Tab>
          <Tab width="50%">Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {<Login></Login>}
          </TabPanel>
          <TabPanel>
            {<Signup></Signup>}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>


  </Container>;
};

export default HomePage;
