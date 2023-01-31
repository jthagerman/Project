import { Container, Text } from "@/Components/Styled/Button";
export default function Button({
  children,
  icon,
  fontSize = "1rem",
  bgColor = "#000000",
  color = "#ffffff",
  height = "3.0635rem",
  fontWeight = "600",
  width = "100%",
  padding = "0px 0px 0px 0px",
  type = "button",
  blur = false,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  margin,
  hoverColor,
  hoverFontColor,
  mobileFontSize = "1rem",
  mobileHeight = "3.0635rem",
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  fontSize?: string;
  bgColor?: string;
  color?: string;
  height?: string;
  fontWeight?: string;
  width?: string;
  padding?: string;
  type?: "button" | "submit" | "reset" | undefined;
  blur?: boolean;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  margin?: string;
  hoverColor?: string;
  hoverFontColor?: string;
  mobileFontSize?: string;
  mobileHeight?: string;
}) {
  return (
    <Container
      fontSize={fontSize}
      bgColor={bgColor}
      color={color}
      height={height}
      width={width}
      fontWeight={fontWeight}
      padding={padding}
      type={type}
      blur={blur}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      margin={margin}
      hoverColor={hoverColor}
      hoverFontColor={hoverFontColor}
      mobileFontSize={mobileFontSize}
      mobileHeight={mobileHeight}
    >
      {icon && icon}
      <Text>{children}</Text>
    </Container>
  );
}
