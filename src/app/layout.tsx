import './globals.css'

export const metadata = {
  title: 'PyCon India 2023',
  description: 'Generated for PyCon India 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
