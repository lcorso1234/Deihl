type ButtonProps = {
  children: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-md bg-brand-600 px-4 py-2 text-white shadow hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-400">
      {children}
    </button>
  );
}
