import { Center, Circle } from "@chakra-ui/react";
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
    </>
  );
}
