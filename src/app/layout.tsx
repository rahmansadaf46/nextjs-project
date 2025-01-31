import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: 'Next.js',
    template: "%s | Next.js",
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <header
          style={{ backgroundColor: "lightblue", padding: "1rem" }}
        >
          <p>Header</p>
        </header>
        {children}
        <footer
          style={{ backgroundColor: "lightgray", padding: "1rem" }}
        >
          <p>Footer</p>
        </footer>
      </body>

    </html>
  )
}
