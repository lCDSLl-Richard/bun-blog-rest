export interface InputProps {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  value,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <section>
      <label htmlFor={label} className="text-4xl text-primary font-semibold">
        {label}
      </label>
      <input
        className="border border-textColor rounded-lg w-full h-12 px-4 bg-cardBg mt-2 text-xl"
        type="text"
        name={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </section>
  );
}
