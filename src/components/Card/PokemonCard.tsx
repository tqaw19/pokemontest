import React from "react";
import { GridItem, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  image: string;
  onClick: () => void;
}

export const PokemonCard = (props: Props) => {
  const navigate = useNavigate();
  const { name, image = "/defaultimage" } = props;

  const handleClick = () => {
    navigate(`/details/${name}`);
  };

  return (
    <GridItem
      rounded="md"
      border="2px solid #ececec"
      display="flex"
      flexDir="column"
      onClick={handleClick}
      cursor="pointer"
    >
      <Text textAlign="center" fontWeight="bold" textTransform="uppercase">
        {name}
      </Text>
      <Image src={image} alt={name} />
    </GridItem>
  );
};
