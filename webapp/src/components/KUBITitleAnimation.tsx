import React, { useState, useEffect } from "react";
import {Title } from "@mantine/core"



export function KUBITitleAnimation() {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(
    "Welcome to the official website of the University of Kansas Blockchain Institute."
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 40);
    }
  }, [index]);
  return <Title style={{font: "Courier", marginLeft: 20}}>{text}</Title>;
}
