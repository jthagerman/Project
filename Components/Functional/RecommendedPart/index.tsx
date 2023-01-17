import {
  Container,
  Thumbnail,
  Name,
  Description,
  Price,
  Buttons,
} from "@/Components/Styled/RecommendedPart";
import Button from "@/Components/Functional/Button";
import { useTheme } from "styled-components";
import { UITheme } from "@/types";

export default function RecommendedPart({
  name,
  price,
  thumbnail,
  description,
}: {
  name: string;
  price: string;
  thumbnail: string;
  description: string;
}) {
  const theme = useTheme() as UITheme;
  return (
    <Container>
      <Thumbnail src={thumbnail} />
      <Name>{name}</Name>
      <Description>{description + description}</Description>
      <Price>{price}</Price>
      <Buttons>
        <Button
          fontSize="1.125rem"
          color={theme.colors.blackFont}
          bgColor={theme.colors.white}
        >
          Read More
        </Button>
        <Button fontSize="1.125rem">Buy Now</Button>
      </Buttons>
    </Container>
  );
}
