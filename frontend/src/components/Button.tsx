export interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  return (
    <button className="w-full bg-primary !text-white rounded-lg h-10">
      {label}
    </button>
  );
}
