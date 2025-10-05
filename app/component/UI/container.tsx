export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-[1800px] w-full h-full" style={{ margin: "auto" }}>
      {children}
    </div>
  );
}
