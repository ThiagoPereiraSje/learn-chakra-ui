import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const directions = [
  { pos: "to-t", label: "to top" },
  { pos: "to-tr", label: "to top right" },
  { pos: "to-r", label: "to right" },
  { pos: "to-br", label: "to bottom right" },
  { pos: "to-b", label: "to bottom" },
  { pos: "to-bl", label: "to bottom left" },
  { pos: "to-l", label: "to left" },
  { pos: "to-tl", label: "to top left" },
];

export default function Gradient() {
  const [index, setIndex] = useState(0);

  const rotateGradient = () => {
    if (index === directions.length - 1) {
      setIndex(0);
      return;
    }

    setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <>
      <Text
        bgGradient={`linear(${directions[index].pos}, red.100, blue.300)`}
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold">
        Welcome to Chakra UI
      </Text>
      <Text>Linear Gradient</Text>
      Index [{index}]: Direction {directions[index].label}
      <Box
        w="50%"
        h="200px"
        bgGradient={`linear(${directions[index].pos}, red.100, blue.300)`}>
        <Button
          left="20%"
          top="20%"
          onClick={rotateGradient}>
          Click Me!
        </Button>
      </Box>
      <Text>Radial Gradient</Text>
      <Box
        w="200px"
        h="200px"
        bgGradient="radial(gray.300, yellow.400, red.600)"
      />
    </>
  );
}
