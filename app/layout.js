import './globals.css'

export const metadata = {
  title: 'Call Arena',
  description: 'Casino Call Platform'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
