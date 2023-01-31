import {
  Container,
  Name,
  Description,
  Thumbnail,
  ButtonWrapper,
} from "@/Components/Styled/BlogAd";
import type { BlogAdProps } from "@/Components/Functional/BlogAd/index.d";
import Button from "@/Components/Functional/Button";

export default function BlogAd({
  productName,
  price,
  thumbnail,
  description,
}: BlogAdProps) {
  return (
    <Container>
      <Name>{productName}</Name>
      <Thumbnail src={thumbnail} alt={productName} />
      <Description>{description}</Description>
      <ButtonWrapper>
        <Button
          mobileFontSize=".875rem"
          mobileHeight="40px"
        >{`Buy Now ${price}`}</Button>
      </ButtonWrapper>
    </Container>
  );
}
