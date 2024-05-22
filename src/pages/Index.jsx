import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Text, VStack, HStack, Button, Box } from "@chakra-ui/react";
import { FaHome, FaInfoCircle } from "react-icons/fa";

const Home = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Home Page</Text>
        <Text>This is the home page of our website.</Text>
      </VStack>
    </Container>
  );
};

const About = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">About Us</Text>
        <Text>This is the about page of our website.</Text>
      </VStack>
    </Container>
  );
};

const Navigation = () => {
  return (
    <HStack spacing={4} padding={4} bg="gray.100" width="100%" justifyContent="center">
      <Button as={Link} to="/" leftIcon={<FaHome />} colorScheme="teal" variant="solid">
        Home
      </Button>
      <Button as={Link} to="/about" leftIcon={<FaInfoCircle />} colorScheme="teal" variant="solid">
        About
      </Button>
    </HStack>
  );
};

const Index = () => {
  return (
    <Router>
      <Box>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default Index;
