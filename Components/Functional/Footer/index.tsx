import {
  Container,
  Disclaimer,
  Column,
  Row,
  Logo,
  ColumnName,
  Anchor,
  List,
  Input,
  InputWrapper,
  Content,
  ContentRow,
} from "@/Components/Styled/Footer";
import Button from "../Button";
import logoIcon from "public/images/icons/Logo.svg";
import { useTheme } from "styled-components";
import { UITheme } from "@/types";
import footerScribble from "public/images/Layout/Scribble.png";
import brush from "public/images/Home/Brush.svg";

export default function Footer() {
  const theme = useTheme() as UITheme;
  return (
    <Container src={brush.src}>
      <Content>
        <Row align="flex-end">
          <Column flex="1.2">
            <h2>Stay in loop</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              elementum vel sem sit amet aliquet. In sed tristiqu.
            </h3>
          </Column>

          <Column flex=".1">
            <InputWrapper>
              <Input type="email" placeholder="Email Address"></Input>
              <Button
                type="submit"
                bgColor={theme.colors.white}
                height={theme.buttons.heights.small}
                color={theme.colors.blackFont}
                padding={"0px .8rem"}
                width={"max-content"}
                margin="5px"
              >
                Read More
              </Button>
            </InputWrapper>
          </Column>
        </Row>

        <ContentRow>
          <Column flex="1.65">
            <Logo src={logoIcon.src} alt="World Record Logo" />
            <Disclaimer>
              Disclaimer that while some lis may contain affiliate links,
              reviews of all products are not influenced by affiliation.
            </Disclaimer>
          </Column>
          <Column>
            <List>
              <ColumnName>Contact</ColumnName>
              <li>8180 Andover St.Tualatin.</li>
              <li>+383 49 123 123</li>
              <li>Contact@email.com</li>
            </List>
          </Column>
          <Column>
            <List>
              <ColumnName>Links</ColumnName>
              <Anchor href="/Knowledge_Bank">Knowledge Bank</Anchor>
              <Anchor href="/Recommend Parts">Recommended Parts</Anchor>
              <Anchor href="/Tuning Solitions">Tuning Solutions</Anchor>
              <Anchor href="/Leaderboards">Leaderboards</Anchor>
            </List>
          </Column>
        </ContentRow>
      </Content>
    </Container>
  );
}
