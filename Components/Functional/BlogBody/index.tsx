import { Container, Title, Subtitle } from "@/Components/Styled/BlogBody";
import ReactMarkdown from "react-markdown";
import type { BlogBodyProps } from "@/Components/Functional/BlogBody/index.d";

export default function BlogBody({ title, subtitle, content }: BlogBodyProps) {
  const markdown = `A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Note that --- not considering the asterisk --- the actual text
  content starts at 4-columns in.
  
  > Block quotes are
  > written like so.
  >
  > They can span multiple paragraphs,
  > if you like.
  
  Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
  in chapters 12--14"). Three dots ... will be converted to an ellipsis.
  Unicode is supported. ☺
  An h2 header
------------

Here's a numbered list:

 1. first item
 2. second item
 3. third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:
  `;

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </Container>
  );
}
