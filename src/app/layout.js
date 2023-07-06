import Nav from '@/components/navigation/navigation';
import './globals.css'


export const metadata = {
  title: 'MKS one Solution',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Nav />
        {children}
      </body>
    </html>
  )
}
