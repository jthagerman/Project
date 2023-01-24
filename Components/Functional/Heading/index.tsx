import {
  Container,
  Heading as HeadingText,
  Subheading,
} from "@/Components/Styled/Heading";
export default function Heading({
  heading,
  subheading,
  margin = "1rem 1rem",
}: {
  heading?: string;
  subheading?: string;
  margin?: string;
}) {
  return (
    <Container margin={margin}>
      {heading && <HeadingText>{heading}</HeadingText>}
      {subheading && <Subheading>{subheading}</Subheading>}
    </Container>
  );
}
