import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SUEEP',
  description: 'Greg\'s Pagina sueep',
  keywords :'sueep,painting, residencial, comercial'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="navbar bg-base-100">
            <div className="flex-1">
              <Link href="/" className="btn btn-ghost normal-case text-xl">
                BIENVENIDOS A SUEEP
              </Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                {/* <li><link href="/about">About</link></li>
                <li><link href="/about/contact">Contact</link></li>
                <li><link href="/infousers">Info user</link></li> */}
                
                <li><a href="/about">About</a></li>
                <li><a href="/about/contact">Contact</a></li>
                <li><a href="/infousers">Infousers</a></li>

                      
              </ul>
            </div>
          </div>
        {children}
      </body>
    </html>
  )
}
