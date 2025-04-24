import { Plus_Jakarta_Sans, Lato } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"], // Add other weights as needed
  display: "swap",
});

export const metadata = {
  title: "WeeFly - Booking Flights Made Easy",
  description:
    "Book your flights with ease and convenience using WeeFly. Experience seamless travel planning and enjoy exclusive deals on flights worldwide.",
};

import "react-datepicker/dist/react-datepicker.css";
import "aos/dist/aos.css";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${lato.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
