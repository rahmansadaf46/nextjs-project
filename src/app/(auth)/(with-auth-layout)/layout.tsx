export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <h2>auth layout</h2>
    </>
  )
}
