import type { AppProps } from "next/app";
import Theme from "@/Theme/theme";
import { Outfit, Poppins } from "@next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${outfit.className} ${poppins.className}`}
      style={{ display: "contents" }}
    >
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </div>
  );
}
