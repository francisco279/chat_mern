import { FormControl, 
         FormLabel, 
         Input, 
         InputGroup, 
         InputRightElement, 
         VStack,
         Button }   from "@chakra-ui/react";
import { useState } from "react";

const Signup = () => {

    //STATE VARIABLES
    const [show,            setShow] =            useState(false)
    const [name,            setName] =            useState();
    const [email,           setEmail] =           useState();
    const [password,        setPassword] =        useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [pic,             setPic] =             useState();

    //FUNCTIONS
    //function to show the password
    const HanleClick = () => setShow(!show);

    //function to upload the image
    const postDetails = () => {};

    //function to sumnit the form data
    const sumbitHandler = () => {};


    return <VStack spacing="5px" color="black">
              <FormControl id="first-name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder="Enter Your Name"
                    onChange={ (e) => {setName(e.target.value)}}
                ></Input>
              </FormControl>

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

              <FormControl id="password" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input
                        type=        {show ?  "text" : "password"}
                        placeholder= "Confirm Password"
                        onChange={ (e) => {setConfirmPassword(e.target.value)}}
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

              <FormControl id="pic">
                <FormLabel>Upload your picture</FormLabel>
                <Input
                    placeholder="astaroth"
                    type=   "file"
                    p=      {1.5}
                    accept= "image/*"
                    onChange={ (e) => postDetails(e.target.files[0])}
                ></Input>
              </FormControl>

              <Button
              colorScheme="blue"
              width="100%"
              style={{marginTop: 15}}
              onClick={sumbitHandler}
              >
                Sign Up
              </Button>
           </VStack>
};

export default Signup; 