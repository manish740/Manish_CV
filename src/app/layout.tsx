import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Manish Rohilla | Service Desk & Junior Engineer Portfolio',
  description: 'A technical showcase for Manish Rohilla, a Service Desk Engineer with 2 years of experience in IT operations, VPN, and Office 365.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-accent/30 selection:text-accent">
        {children}
      </body>
    </html>
  );
}
