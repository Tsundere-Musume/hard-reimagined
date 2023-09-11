import "./globals.css"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: 'Hard Reimagined',
  description: 'Remake of hard which is a clone of medium.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}