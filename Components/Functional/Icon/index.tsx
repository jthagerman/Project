import { Container } from "@/Components/Styled/Icon";

export default function Icon({
  height = "1rem",
  width = "1rem",
  color = "#000000",
  src,
}: {
  height?: string;
  width?: string;
  color?: string;
  src: string;
}) {
  return (
    <Container
      height={height}
      width={width}
      color={color}
      src={src}
    ></Container>
  );
}
