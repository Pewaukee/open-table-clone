export default function Description({ description }: { description: string }) {
  return (
    <div className="mt-4 text-black">
      <p className="text-lg font-light">{description}</p>
    </div>
  );
}
