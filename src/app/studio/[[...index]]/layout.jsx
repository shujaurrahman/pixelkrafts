export const metadata = {
  title: 'PixelKrafts Studio',
  description: 'Content Management for PixelKrafts',
}

export default function StudioLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
