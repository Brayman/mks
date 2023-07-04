import Header from '../components/header'
import './globals.css'


export const metadata = {
  title: 'MKS one Solution',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
      </body>
    </html>
  )
}
