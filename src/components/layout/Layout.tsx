import React from "react";
import { Outlet } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { StyledContainer } from "./styles";

export const Layout = () => {
  return (
    <StyledContainer className="container-general">
      <Text paddingTop="2rem" fontSize="4xl" fontWeight="bold">
        Pokemon Prueba
      </Text>

      <Outlet />
    </StyledContainer>
  );
};
