import { Box, Button, ButtonGroup, Flex, Heading, IconButton, Image, Input, InputGroup, Spacer,Avatar, Menu, Portal, Select  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    const Login = () => {
    navigate("/Login");
  };

  return (
    <Box bg="#333" color="#fff" padding="20px" w={{ sm: "100vw", md: "100vw", lg: "100vw", xl: "100vw", "2xl": "100vw", }} >
      <Flex minWidth="max-content" alignItems="center" gap="2" display='flex' justifyContent='space-between'>
        <Box p="2" display="flex" gap="10px" alignItems="center">
          <Image src="/public/vite.svg" alt="Dan Abramov" />
          <Heading size="md" w="120px">
            {" "}
            Santa Rosa
          </Heading>
        </Box>
        {/* <Spacer /> */}

        <InputGroup
          w="60%"
          display={{ base: "none", lg: "block" }}
          endElement={
            <IconButton bottom="40px" left="10px" bg="none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-search"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </IconButton>
          }
        >
          <Input placeholder="Buscar..." />
        </InputGroup>

        <ButtonGroup gap="5" display='flex'>
          <Box as='select' name="language" id="language" bg='none' fontWeight='semibold' border='20px' >
            <Box as='option' bg='#fff' color='#333' value="es" lang="es" fontWeight='semibold' border='10px'>
                ES
            </Box>
            <Box as='option' bg='#fff' color='#333' value="en" lang="en" selected fontWeight='semibold'>
                EN
            </Box>
          </Box>
          {/* <Button colorScheme="teal">EN</Button> */}
          <Menu.Root positioning={{ placement: "top-start" }}>
            <Menu.Trigger rounded="full" focusRing="outside">
              <Avatar.Root size="sm">
                <Avatar.Fallback name="Segun Adebayo" />
                {/* <Avatar.Image src="https://bit.ly/sage-adebayo" /> */}
              </Avatar.Root>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="account" onClick={Login}>Iniciar Session</Menu.Item>
                  <Menu.Item value="settings" onClick={Login}>Registrarte</Menu.Item>
                  {/* <Menu.Item value="logout">Logout</Menu.Item> */}
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </ButtonGroup>
      </Flex>
      <InputGroup
        w="100%"
        display={{
          base: "block",
          sm: "block",
          md: "block",
          lg: "none",
          xl: "none",
          "2xl": "none",
        }}
        endElement={
          <IconButton bottom="40px" left="10px" bg="none" cursor='pointer'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-search"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </IconButton>
        }
      >
        <Input placeholder="Buscar..." />
      </InputGroup>
    </Box>
  );
}

export default NavBar
