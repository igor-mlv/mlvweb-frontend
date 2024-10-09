import { Locale } from '../../../i18n.config';
import "./globals.css";

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body>
        {children}
      </body>
    </html>
  );
}