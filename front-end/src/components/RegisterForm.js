import React, { useState } from 'react';
import { Flex, Box, FormControl, Input, Stack,
  Button, Heading, Text, InputGroup, InputLeftElement,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon, Icon } from '@chakra-ui/icons'
import { FaUser } from 'react-icons/fa'

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validate, setValidate] = useState(false);

  function handleChange(e, name = '') {
    if (name === 'email') {
      setEmail(e.target.value)
    } else if (name === 'password') {
      setPassword(e.target.value)
    } else {
      setName(e.target.value)
    }
  }

  function validateRegister() {
    if (!name || name.length < 6) {
      return true;
    } else if (!password || password.length < 8) {
      return true;
    } else if (!email || !email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return true;
    }
  }

  function onClick() {
    const validate = validateRegister()

    if (validate) return setValidate(true);
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bgGradient="linear(to-r, #7928CA, #FF0080)">
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} width="70vh">
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} color="whiteAlpha.900">Registre-se Gratis</Heading>
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
            <FormControl id="text">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={FaUser} color="white" />}
                  />
                  <Input
                    variant="flushed"
                    type="text"
                    placeholder="Nome"
                    _placeholder={{ color: 'white' }}
                    focusBorderColor="white"
                    onChange={ (e) => handleChange(e) }
                  />
                </InputGroup>
            </FormControl>
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
                  onChange={ (e) => handleChange(e, 'password') }
                />
              </InputGroup>
            </FormControl>
            { validate ? <Text>Campos Inválidos</Text> : <span /> }
            <Stack spacing={10}>
              <Button
                bg={'#4f214d'}
                color={'white'}
                _hover={{
                  bg: '#9e4f9b',
                }}
                boxShadow="none"
                onClick={ onClick }
              >
                Registre-se
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default RegisterForm;
