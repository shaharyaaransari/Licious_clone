import { useContext, useState } from 'react';
    import { AuthContext } from '../context/ContextApi';
import { Navigate } from 'react-router-dom';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
   
  } from '@chakra-ui/react';

  export default function Login() {
    const [email,setEmail] = useState("");
    const { isAuth,handleAuth } = useContext(AuthContext)
    const [password,setPassword] =useState("");
    const handlesubmit = async() => {
     
      fetch(`https://reqres.in/api/login`, { method: "POST", headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify({email:email,password:password}) }).then((res)=>res.json()).then((data)=>{ handleAuth()
        alert(`Login succesfully`)
  
       })
      
  }
  if(isAuth){
    return <Navigate  to="/Chicken"/>
     }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
       >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email"  >
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={()=>handlesubmit()}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }