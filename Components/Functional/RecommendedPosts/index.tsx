import { BlogPreview } from "@/Components/Functional/BlogPreview/index";
import type { RecomnendedPostProps } from "@/Components/Functional/RecommendedPosts/index.d";
import { Container, Heading } from "@/Components/Styled/RecommendedPosts";
export default function RecommendedPosts({
  list,
}: {
  list: RecomnendedPostProps;
}) {
  return (
    <Container>
      <Heading>Read More Blog Posts</Heading>
      {Array.isArray(list) &&
        list.map((item: any) => {
          return <BlogPreview {...item} key={item.name} />;
        })}
    </Container>
  );
}
