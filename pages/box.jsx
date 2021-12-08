import { Box, AspectRatio } from "@chakra-ui/react";
import Image from "next/image";
import dog from "../images/dog.jpeg";

export default function _Box() {
  return (
    <>
      <Box
        maxW="200px"
        height="200px"
        bgColor="red.800"
        border="2px solid black">
        This is the Box
      </Box>

      <Box as="h1" color="red.800" fontSize="50px">
        This is an h1
      </Box>

      <Box as="button" color="red.800" fontSize="50px">
        This is an Button
      </Box>

      <Box
        width="100%"
        height="400px"
        bgColor="#d10056"
        padding={2}
        display="flex"
        justifyContent="space-evenly">
        <AspectRatio
          flexGrow={5}
          ratio={1.85 / 1}
          maxW="350px">
          <Box
            maxW="350px"
            bgColor="pink"
            p={2}
            borderTopRadius={4}
            border="solid 2px black"
            display="flex"
            flexDirection="column">
            <Box as="h2" fontSize="40px">
              Dangerous Dog
            </Box>
            <Image src={dog} alt="Dangerous Dog" />
          </Box>
        </AspectRatio>
      </Box>
    </>
  );
}
