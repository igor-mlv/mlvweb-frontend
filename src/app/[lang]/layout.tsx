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
        <main className='w-full flex justify-center overflow-hidden bg-background'>
          <div className="w-full max-w-global-container min-w-global-container">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}