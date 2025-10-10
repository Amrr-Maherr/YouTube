export default function ChannelDescriptionComponent({ description }) {
  if (!description) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 mt-6">
      <h2 className="text-lg font-semibold mb-2">About</h2>
      <p className="text-gray-700 whitespace-pre-line">{description}</p>
    </div>
  );
}
