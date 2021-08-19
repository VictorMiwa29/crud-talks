import React, { useState, useEffect } from 'react';
import { Flex, Box, FormControl, Input, Checkbox, Stack, Link,
  Button, Heading, Text, InputGroup, InputLeftElement
} from '@chakra-ui/react';
import { EmailIcon, LockIcon} from '@chakra-ui/icons'
const { loginRequest } = require('../api/ApiRequests');

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const saveLoginStorage = JSON.parse(localStorage.getItem('saveLogin'));
    if (saveLoginStorage) {
      const { email, password } = saveLoginStorage;
      setEmail(email)
      setPassword(password)
    }
  },[setEmail, setPassword]);

  async function handleClick() {
    const result = await loginRequest({ email, password })
    console.log(result);
  }

  function handleChange(e, name = '') {
    if (name === 'email') {
      setEmail(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }

  function saveLogin(e) {
    if (e.target.checked) {
      localStorage.setItem('saveLogin', JSON.stringify({ email, password }))
    } else {
      localStorage.removeItem('saveLogin');
    }
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bgGradient="linear(to-r, #7928CA, #FF0080)">
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} width="70vh">
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} color="whiteAlpha.900">Entre na sua conta</Heading>
          <Text fontSize={'lg'} color={'whiteAlpha.900'}>
            Work Hard Dream Big 💪
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          border="1px"
          borderColor="white"
          p={8}>
          <Stack spacing={10}>
            <FormControl id="email">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="white" />}
                />
                <Input
                  variant="flushed"
                  type="email"
                  placeholder="Email"
                  _placeholder={{ color: 'white' }}
                  focusBorderColor="white"
                  value={ email }
                  onChange={ (e) => handleChange(e, 'email') }
                />
              </InputGroup>
            </FormControl>
            <FormControl id="password">
              <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<LockIcon color="white" />}
                />
                <Input
                  variant="flushed"
                  type="password"
                  placeholder="Senha"
                  _placeholder={{ color: 'white' }}
                  focusBorderColor="white"
                  value={ password }
                  onChange={ (e) => handleChange(e) }
                />
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox
                  color="white"
                  colorScheme="#4f214d"
                  boxShadow="none"
                  onChange={ (e) => saveLogin(e) }
                >
                  Lembre me
                </Checkbox>
              </Stack>
              <Button
                bg={'#4f214d'}
                color={'white'}
                _hover={{
                  bg: '#9e4f9b',
                }}
                boxShadow="none"
                onClick={ handleClick }  
              >
                Login
              </Button>
              <Link
                textAlign="center"
                color="white"
                fontSize="sm"
                href="/register"
              >
                Ainda não tem cadastro? clique aqui!
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default LoginForm;
