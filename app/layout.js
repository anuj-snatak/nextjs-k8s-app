// app/layout.js
export const metadata = {
  title: 'Docker Network Demo',
  description: 'Next.js frontend talking to Python backend via Docker network',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}

