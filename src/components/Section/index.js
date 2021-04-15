import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import Typical from "react-typical";
import {
  SectionContainer,
  SectionContainerBody,
  SectionContainerBodyContainerLeft,
  SectionDetials,
  SectionContainerBodyContainerRigth,
  Image,
  Button,
  SectionDetialsh1,
  SectionDetialsh2,
  Span1,
  Span,
} from "../../components/Section/style";
import content from "../../content";

const Section = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setIsLoaded(isLoaded);
  }, []);
  return (
    <SectionContainer id={"section"}>
      <SectionContainerBody>
        <SectionContainerBodyContainerLeft>
          <SectionDetials>
            <SectionDetialsh1 isLoaded={isLoaded}>
              {content.header.text[0]}
            </SectionDetialsh1>
            <SectionDetialsh1>{content.header.text[1]}</SectionDetialsh1>
            <SectionDetialsh2 isLoaded={isLoaded}>
              <Span1>{content.header.text[2]} </Span1>
              <Span>
                <Typical
                  steps={[
                    content.header.typical[0],
                    content.header.typical[1],
                    content.header.typical[2],
                    content.header.typical[3],
                    content.header.typical[4],
                    content.header.typical[5],
                  ]}
                  loop={Infinity}
                />
              </Span>
            </SectionDetialsh2>
            <Button to="">{content.header.btnText}</Button>
          </SectionDetials>
        </SectionContainerBodyContainerLeft>
        <SectionContainerBodyContainerRigth>
          <Image src={content.header.img} />
        </SectionContainerBodyContainerRigth>
      </SectionContainerBody>
    </SectionContainer>
  );
};

export default Section;
