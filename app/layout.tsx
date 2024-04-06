import './ui/global.css';
import { inter, alfa } from './ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${alfa} antialiased`}>
        {children}
      </body>
    </html>
  );
}
