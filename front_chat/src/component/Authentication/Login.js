import { FormControl, 
    FormLabel, 
    Input, 
    InputGroup, 
    InputRightElement, 
    VStack,
    Button,
    useToast }         from "@chakra-ui/react";
import { useState }    from "react";
import axios           from "axios";
import { useHistory }  from "react-router-dom";

const Login = () => {
    
    //STATE VARIABLES
    const [show,           setShow] = useState(false)
    const [email,         setEmail] = useState();
    const [password,   setPassword] = useState();
    const [loading,     setLoading] = useState(false);

    //toast
    const toast   = useToast();
    const history = useHistory();
    //FUNCTIONS
    //function to show the password
    const HanleClick = () => setShow(!show);

    //function to sumnit the form data
    const sumbitHandler = async() => {
      setLoading(true);
      //check if email or password was entered
      if(!email || !password)
      {
        toast
          (
            {
              title     : "Please fill al the fields",
              status    : "warning",
              duration  : 5000,
              isClosable: true,
              position  : "bottom",
            }
          );
          setLoading(false);
          return;
      }

      try 
      {
        const config = 
        {
          headers: 
          {
            "Content-type": "application/json",
          },
        };

        const { data } = await axios.post("http://localhost:5000/api/user/login", 
        {
          email, 
          password
        }, config);

        toast
          (
            {
              title     : "Login Successful",
              status    : "success",
              duration  : 5000,
              isClosable: true,
              position  : "bottom",
            }
          );
          localStorage.setItem("UserInfo", JSON.stringify(data));
          setLoading(false);
          history.push("/chats");
      } 
      catch (error) 
      {
        toast
        (
          {
            title      : "Error occured!",
            description: error.response.data.message,
            status     : "error",
            duration   : 5000,
            isClosable : true,
            position   : "bottom",
          }
        );
        setLoading(false);
      }

    };


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
              isLoading={loading}
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
