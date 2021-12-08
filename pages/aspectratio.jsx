import { AspectRatio, Button } from "@chakra-ui/react";
import { useState } from "react";

const sizes = [21 / 9, 16 / 9, 9 / 16, 4 / 3, 1];
const labels = ["21/9", "16/9", "9/16", "4/3", "1"];

export default function _AspectRatio() {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index === sizes.length - 1) {
      setIndex(0);
      return;
    }

    setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <>
      Size: {labels[index]}
      <Button onClick={next}>Next</Button>
      <AspectRatio ratio={sizes[index]}>
        <iframe
          title="Youtube video player"
          allow="accelerometer; autoplay; clipboard-write; gyroscope;"
          allowFullScreen
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"></iframe>
        {/* -images, -maps e etc */}
      </AspectRatio>
    </>
  );
}
