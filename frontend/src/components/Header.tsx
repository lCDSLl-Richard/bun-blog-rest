export default function Header({
  props: { title, subtitle },
}: {
  props: { title: string; subtitle: string };
}) {
  return (
    <hgroup className="flex flex-col gap-2 mt-6">
      <h1 className="text-6xl text-primary font-bold">{title}</h1>
      <h2 className="text-4xl mt-4">{subtitle}</h2>
    </hgroup>
  );
}
