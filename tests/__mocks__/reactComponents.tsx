import * as React from "react";
import styled from "styled-components";
import { Burger } from "./Burger";
import { Pancakes } from "./Pancakes";
import { Polaroid } from "./Polaroid";

const ElementGroup = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const ElementItem = styled.div`
  position: relative;
`;

export const SingleDivElements = (): React.ReactElement => (
  <ElementGroup>
    <ElementItem>
      <Burger />
    </ElementItem>
    <ElementItem>
      <Pancakes />
    </ElementItem>
    <ElementItem>
      <Polaroid />¬
    </ElementItem>
  </ElementGroup>
);
