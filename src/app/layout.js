import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "UI/UX Design Services",
  description: "Get high-quality, productized UI/UX design services with fast delivery.Customized design packages crafted for businesses of all sizes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
    crossOrigin="anonymous"
     referrerPolicy="no-referrer"/> 
      </head>
      <body >
        {children}
      </body>
    </html>
  );
}
