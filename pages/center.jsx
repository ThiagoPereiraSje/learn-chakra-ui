import { Center, Circle, Square } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function _Center() {
  const [bCircle, setBCircle] = useState(300);

  useEffect(() => {
    if (bCircle < 300) {
      setBCircle((prev) => prev + 1);
    }
  }, [bCircle]);

  return (
    <>
      <h1>Center</h1>

      <Center bg="tomato" h="100px" color="white">
        This is the Center
      </Center>

      <Circle
        bgColor="green.100"
        width={bCircle}
        height={bCircle}
        marginLeft="20px">
        <Circle
          as="button"
          onClick={() => setBCircle(0)}
          bgColor="green.300"
          width={bCircle - 50}
          height={bCircle - 50}>
          {bCircle >= 250 ? <p>Hello</p> : ""}
        </Circle>
      </Circle>

      <Square bgColor="gray.300">
        <Square
          bgColor="pink.300"
          width="200px"
          height="200px">
          <Center>
            <Square
              bgColor="pink.400"
              width="100px"
              height="100px"
              marginTop="auto">
              <Center>
                <Circle
                  as="button"
                  width="50px"
                  height="50px"
                  bgColor="pink.200">
                  Box
                </Circle>
              </Center>
            </Square>
          </Center>
        </Square>
      </Square>
    </>
  );
}
