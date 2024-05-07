export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-bold text-center">Products</h2>
      {children}
    </div>
  );
}
