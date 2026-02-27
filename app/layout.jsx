// app/layout.jsx

export const metadata = {
  title: 'Wips Tech Ops Intelligence',
  description: 'Next.js project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
