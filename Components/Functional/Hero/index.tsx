import {
  Container,
  Row,
  Buttons,
  SubHeading,
  Title,
  Wrapper,
} from "@/Components/Styled/Hero";
import heroImage from "@/public/images/Home/hero.png";
import scribble from "@/public/images/Home/HeroScribble.png";
import Button from "@/Components/Functional/Button";
import ThumbsUp from "@/public/images/icons/thumbsUp.svg";
import Tuning from "@/public/images/icons/tuning.svg";
import Leaderboard from "@/public/images/icons/leaderboard.svg";
import Icon from "@/Components/Functional/Icon";
import { useTheme } from "styled-components";
import { UITheme } from "@/types";

export default function Hero() {
  const theme = useTheme() as UITheme;
  return (
    <Container src={heroImage.src} scribble={scribble.src}>
      <Wrapper>
        <SubHeading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </SubHeading>
        <Title>Lorem ipsum dolor sit amet elit</Title>
        <Buttons>
          <Row>
            <Button
              bgColor={theme.colors.white}
              color={theme.colors.white}
              hoverColor={theme.colors.white}
              hoverFontColor={theme.colors.blackFont}
              blur={true}
              icon={
                <Icon
                  src={Leaderboard.src}
                  height="20px"
                  width="20px"
                  color={theme.colors.white}
                />
              }
            >
              Leaderboards
            </Button>
            <Button
              bgColor={theme.colors.white}
              color={theme.colors.white}
              hoverColor={theme.colors.white}
              hoverFontColor={theme.colors.blackFont}
              blur={true}
              icon={
                <Icon
                  src={Tuning.src}
                  height="22px"
                  width="20px"
                  color={theme.colors.white}
                />
              }
            >
              Tuning Options
            </Button>
          </Row>
          <Button
            bgColor={theme.colors.white}
            color={theme.colors.white}
            hoverColor={theme.colors.white}
            hoverFontColor={theme.colors.blackFont}
            blur={true}
            icon={
              <Icon
                src={ThumbsUp.src}
                height="22px"
                width="20px"
                color={theme.colors.white}
              />
            }
          >
            Reccomended Modifications
          </Button>
        </Buttons>
      </Wrapper>
    </Container>
  );
}
