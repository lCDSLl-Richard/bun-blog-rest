export interface TextAreaProps {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({
  label,
  value,
  placeholder,
  onChange,
}: TextAreaProps) {
  return (
    <section>
      <label htmlFor={label} className="text-4xl text-primary font-semibold">
        {label}
      </label>
      <textarea
        className="border border-textColor rounded-lg w-full h-48 p-4 bg-cardBg mt-2 text-xl"
        name={label}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </section>
  );
}
