import type { BlogPreviewProps } from "@/Components/Functional/BlogPreview/index.d";
import {
  Container,
  Date,
  Title,
  Subtitle,
  Thumbnail,
} from "@/Components/Styled/BlogPreview";

export function BlogPreview({
  title,
  subtitle,
  thumbnail,
  date,
}: BlogPreviewProps) {
  return (
    <Container>
      <Date>{date}</Date>
      <Title href={`/blog/${title}`}>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Thumbnail src={thumbnail} loading={"lazy"} alt={title} />
    </Container>
  );
}
