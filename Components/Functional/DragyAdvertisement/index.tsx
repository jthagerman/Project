import {
  ButtonWrapper,
  Container,
  Description,
  Header,
  Image,
} from "@/Components/Styled/DragyAdvertisement";
import underline from "public/images/Home/Scribble.svg";
import Button from "../Button";
import dragyImage from "public/images/Home/Dragy.png";
import { DecoratedEmphasis } from "@/Components/Styled/Emphasis";
import { useTheme } from "styled-components";
import type { UITheme } from "@/types";

export default function DragyAdvertisement() {
  const theme = useTheme() as UITheme;
  return (
    <Container>
      <Header>
        {`Monitoring vehicle performance is `}
        <DecoratedEmphasis
          color={theme.colors.orange}
          src={underline.src}
          height={"22px"}
          top={"3.1rem"}
        >
          important
        </DecoratedEmphasis>
      </Header>
      <Description>
        {`and Dragy is the most accurate way to monitor your vehicles
          performance after applying modifications, for information about how to
          interpret dragy results`}
      </Description>
      <ButtonWrapper>
        <Button>Read More</Button>
      </ButtonWrapper>
      <Image src={dragyImage.src} />
    </Container>
  );
}
