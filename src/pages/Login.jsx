import { Box, Button, Card, Field, Heading, Input, Spacer, Stack, VStack,Tabs  } from "@chakra-ui/react"
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu"
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";


const Login = () => {
    const navigate = useNavigate();

    const Home = () => {
    navigate("/");
  };
    
  return (
    <Box w="100vw">
      {/* <NavBar/> */}
      <Box
        w="100vw"
        h="100vh"
        display="flex"
        justifyContent="center"
        flexDir="column"
        alignItems="center"
        border="10px"
        // bgColor="blue.200/30"
        bg='red.500/30'
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="5px"
          
        >
          <Tabs.Root defaultValue="members">
            <Tabs.List>
              <Tabs.Trigger value="members" color='#333' fontWeight='500'>
                <LuUser />
                Iniciar Session
              </Tabs.Trigger>
              <Tabs.Trigger value="projects" color='#333' fontWeight='500'>
                <LuFolder />
                Registrarte
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="members">
              <Card.Root maxW="sm" bg="#333" color="#fff">
                <Card.Header>
                  <Card.Title>Iniciar Session</Card.Title>
                  <Card.Description color="#fff">
                    Completa el formulario para iniciar session
                  </Card.Description>
                </Card.Header>
                <Card.Body>
                  <Stack gap="4" w="full">
                    <Field.Root>
                      <Field.Label>Correo</Field.Label>
                      <Input
                        type="email"
                        placeholder="prueba@gmail.com"
                        color="#fff"
                      />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label>Contraseña</Field.Label>
                      <Input type="password" placeholder="********" />
                    </Field.Root>
                  </Stack>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                  <Button variant="outline" color='#000' onClick={Home}>Cancelar</Button>
                  <Button variant="solid">Entrar</Button>
                </Card.Footer>
              </Card.Root>
            </Tabs.Content>
            <Tabs.Content value="projects">
              <Card.Root maxW="750px" bg='#333' color='#fff'>
                <Card.Header>
                  <Card.Title>Registrarte</Card.Title>
                  <Card.Description color='#fff'>
                    Completar el formulario para crear tu cuenta
                  </Card.Description>
                </Card.Header>
                <Card.Body>
                  <Stack gap="4" w="full">
                    <Field.Root>
                      <Field.Label>Nombre</Field.Label>
                      <Input />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label>Apellido</Field.Label>
                      <Input />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label>Correo</Field.Label>
                      <Input type="email" />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label>Contraseña</Field.Label>
                      <Input type="contraseña" />
                    </Field.Root>
                  </Stack>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                  <Button variant="outline" color='#011' onClick={Home}>Cancelar</Button>
                  <Button variant="solid">Crear</Button>
                </Card.Footer>
              </Card.Root>
            </Tabs.Content>
          </Tabs.Root>
        </Box>
      </Box>
    </Box>
  );
}

export default Login

{/* <Card.Root maxW="sm" bg='#333' color='#fff'>
              <Card.Header>
                <Card.Title>Iniciar Session</Card.Title>
                <Card.Description color='#fff'>
                  Completa el formulario para iniciar session
                </Card.Description>
              </Card.Header>
              <Card.Body>
                <Stack gap="4" w="full">
                  <Field.Root>
                    <Field.Label >Correo</Field.Label>
                    <Input type="email" placeholder="prueba@gmail.com" color='#fff'/>
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>Contraseña</Field.Label>
                    <Input type="password" placeholder="********" />
                  </Field.Root>
                </Stack>
              </Card.Body>
              <Card.Footer justifyContent="flex-end">
                <Button variant="outline">Cancel</Button>
                <Button variant="solid">Entrar</Button>
              </Card.Footer>
            </Card.Root>
            {/* <Spacer /> */}
            // <Card.Root maxW="750px" >
            //   <Card.Header>
            //     <Card.Title>Registrarte</Card.Title>
            //     <Card.Description>
            //       Completar el formulario para crear tu cuenta
            //     </Card.Description>
            //   </Card.Header>
            //   <Card.Body>
            //     <Stack gap='4' w="full"  >
            //       <Box>
            //         <Field.Root>
            //           <Field.Label>Nombre</Field.Label>
            //           <Input />
            //         </Field.Root>
            //         <Field.Root>
            //           <Field.Label>Apellido</Field.Label>
            //           <Input />
            //         </Field.Root>
            //       </Box>
            //     <Field.Root>
            //       <Field.Label>correo</Field.Label>
            //       <Input type="email" />
            //     </Field.Root>
            //     <Field.Root>
            //       <Field.Label>password</Field.Label>
            //       <Input type="password" />
            //     </Field.Root>
            //     </Stack>
            //   </Card.Body>
            //   <Card.Footer justifyContent="flex-end">
            //     <Button variant="outline">Cancel</Button>
            //     <Button variant="solid">Crear</Button>
            //   </Card.Footer>
            // </Card.Root> 