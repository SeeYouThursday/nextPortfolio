const Layout = ({
  children,
  productForm,
}: {
  children: React.ReactNode;
  productForm: React.ReactNode;
}) => {
  return (
    <div>
      <main>
        {productForm}
        {children}
      </main>
    </div>
  );
};
