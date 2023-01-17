import type { AppProps } from "next/app";
import Theme from "@/Theme/theme";
import { Outfit, Poppins } from "@next/font/google";
import Footer from "@/Components/Functional/Footer";

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
    <main className={`${outfit.className} ${poppins.className}`}>
      <Theme>
        <Component {...pageProps} />
        <Footer />
      </Theme>
    </main>
  );
}
