import React from "react";
import content from "../../content";
import { stack } from "../../components/Stack/Data";
import {
  StackContainer,
  StackContainers,
  StackHeader,
  StackHeaderH1,
  Stacks,
  StackMiddle,
  Image,
  StackImage,
  StackFooter,
  StackFooterH3,
} from "./style";
const Stack = () => {
  return (
    <StackContainer>
      <StackContainers>
        <StackHeader>
          <StackHeaderH1>{content.stack.title} I Use</StackHeaderH1>
        </StackHeader>
        <Stacks>
          {stack.map((item, index) => {
            return (
              <StackMiddle key={index}>
                <StackImage>
                  <Image bounce={item.bounce} alt={item.alt} src={item.img} />
                </StackImage>
              </StackMiddle>
            );
          })}
        </Stacks>
        <StackFooter>
          <StackFooterH3>{content.stack.desc}</StackFooterH3>
        </StackFooter>
      </StackContainers>
    </StackContainer>
  );
};

export default Stack;
