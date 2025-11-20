
import { title, description } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import TrendList from "@/components/trend-list";
import CastButton from "@/components/cast-button";
import EmojiRotator from "@/components/emoji-rotator";

export { generateMetadata };

export default function Home() {
  return (
    <main className="flex flex-col gap-6 items-center justify-center min-h-screen px-4 py-8 bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-lg mb-8">{description}</p>

      <EmojiRotator className="mb-8" />

      <TrendList className="mb-8" />

      <CastButton className="mt-4" />
    </main>
  );
}
