import "./globals.css";
import StoreProvider from "./storeProvider";

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const initialCount = 6;
  return (
    <StoreProvider count={initialCount}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoreProvider>
  );
}