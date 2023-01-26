import { FormControl, 
         FormLabel, 
         Input, 
         InputGroup, 
         InputRightElement, 
         VStack,
         Button, 
         useToast}     from "@chakra-ui/react";
import axios           from "axios";
import { useState }    from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {

    //STATE VARIABLES
    const [show,            setShow]            = useState(false)
    const [name,            setName]            = useState();
    const [email,           setEmail]           = useState();
    const [password,        setPassword]        = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [pic,             setPic]             = useState();
    const [loading,         setLoading]         = useState(false);
    //toast
    const toast   = useToast();
    const history = useHistory();

    //FUNCTIONS
    //function to show the password
    const HanleClick = () => setShow(!show);

    //function to upload the image
    const postDetails = (pics) => {
        setLoading(true);
        if (pics === undefined) 
        {
            toast
            (
                {
                    title     : "Please Select an Image!",
                    status    : "warning",
                    duration  : 5000,
                    isClosable: true,
                    position  : "bottom",
                }
            );
            return;
        }
        console.log(pics);
        //if an image has been selected
        if (pics.type === "image/jpeg" || pics.type === "image/png") 
        {
            const data = new FormData();
            data.append("file",          pics);
            data.append("upload_preset", "chat-app");
            data.append("cloud_name",    "dt0kxvpgs");
            fetch("https://api.cloudinary.com/v1_1/dt0kxvpgs/image/upload", {
                method: "post",
                body:   data,
            }).then((res) => res.json())
              .then((data) => {
                setPic(data.url.toString());
                console.log(data.url.toString());
                setLoading(false);
                })
                .catch((err) => {
                console.log(err);
                setLoading(false);
                });
        } 
        else 
        {
            toast
            (
                {
                    title     : "Please Select an Image!",
                    status    : "warning",
                    duration  : 5000,
                    isClosable: true,
                    position  : "bottom",
                }
            );
          setLoading(false);
          return;
        }
      };

    //function to submit the form data
    const sumbitHandler = async() => {
        setLoading(true);
        //check if all the fields are filled
        if(!name || !email || !password || !confirmPassword)
        {
            toast
            (
                {
                    title     : "Please fill all the fields",
                    status    : "warning",
                    duration  : 5000,
                    isClosable: true,
                    position  : "bottom",
                }
            );
            setLoading(false);
            return;
        }

        //check if the passwords are correct
        if(password != confirmPassword)
        {
            toast
            (
                {
                    title     : "Passwords do not match",
                    status    : "warning",
                    duration  : 5000,
                    isClosable: true,
                    position  : "bottom",
                }
            );
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
            //save the data on mongodb
            const { data } = await axios.post("http://localhost:5000/api/user", 
            {
                name,
                email,
                password,
                pic
            }, config);
            //show message "Registration successful"
            toast
            (
                {
                    title     : "Registration successful",
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
        }
    };


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
              isLoading={loading}
              >
                Sign Up
              </Button>
           </VStack>
};

export default Signup; 