import RecommendedPart from "@/Components/Functional/RecommendedPart";
import { Container } from "@/Components/Styled/RecommendedPartsList";

export default function RecommendedPartsList({ parts }: any) {
  return (
    <Container>
      {parts.map((part: any) => (
        <RecommendedPart key={Math.random()} {...part} />
      ))}
    </Container>
  );
}
