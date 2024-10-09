import { Locale } from '../../../i18n.config';
import { Inter_Tight, Varela_Round } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
});

const varelaRound = Varela_Round({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-varela-round',
});

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang} className={`${interTight.variable} ${varelaRound.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}