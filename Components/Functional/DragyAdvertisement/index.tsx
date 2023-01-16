import {
  ButtonWrapper,
  Container,
  Description,
  Header,
  Section,
  Image,
  EmphasizedOrange,
} from "@/Components/Styled/DragyAdvertisement";
import underline from "public/images/Home/Scribble.svg";
import Button from "../Button";
import dragyImage from "public/images/Home/Dragy.png";

// !!!This has an emphasized word in the middle of the description how would you handle it?
// The image sucked it had so much white on it

export default function DragyAdvertisement() {
  return (
    <Container>
      <Section>
        <Header>
          {`Monitoring vehicle performance is `}
          <EmphasizedOrange src={underline.src}>important</EmphasizedOrange>
        </Header>
        <Description>
          {`and Dragy is the most accurate way to monitor your vehicles
          performance after applying modifications, for information about how to
          interpret dragy results`}
        </Description>
        <ButtonWrapper>
          <Button>Read More</Button>
        </ButtonWrapper>
      </Section>
      <Image src={dragyImage.src} />
    </Container>
  );
}
