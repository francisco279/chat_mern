import { FormControl, 
    FormLabel, 
    Input, 
    InputGroup, 
    InputRightElement, 
    VStack,
    Button }   from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
    
    //STATE VARIABLES
    const [show,            setShow] =            useState(false)
    const [email,           setEmail] =           useState();
    const [password,        setPassword] =        useState();

    //FUNCTIONS
    //function to show the password
    const HanleClick = () => setShow(!show);

    //function to upload the image
    const postDetails = () => {};

    //function to sumnit the form data
    const sumbitHandler = () => {};


    return <VStack spacing="5px" color="black">
              
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder="Enter Your mail"
                    onChange={ (e) => {setEmail(e.target.value)}}
                ></Input>
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type=        {show ?  "text" : "password"}
                        placeholder= "Enter Your Password"
                        onChange={ (e) => {setPassword(e.target.value)}}
                    ></Input>

                    <InputRightElement
                        width="4.5rem"
                    >
                        <Button 
                            onClick={HanleClick}
                            h="1.75rem"
                            size="sm"
                        >
                            {show ? "Hide" : "Show" }
                        </Button>
                    </InputRightElement>
                </InputGroup>
              </FormControl>

              <Button
              colorScheme="blue"
              width="100%"
              style={{marginTop: 15}}
              onClick={sumbitHandler}
              >
                Login
              </Button>

              <Button
                variant="solid"
                colorScheme="red"
                width="100%"
                onClick={ () => {
                    setEmail("guest@example.com");
                    setPassword("123456");
                }}
              >
                Get Guest User Credentials
              </Button>
           </VStack>
};

export default Login; 
