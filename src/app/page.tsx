import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LinkButton } from "@/components/LinkButton";
import { profile } from "@/data/profile";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center px-4 relative">

      {/* Toggle de tema */}
      <div className="absolute top-4 right-6">
        <ThemeToggle />
      </div>

      {/* Avatar */}
      <Image
        src={profile.avatarUrl}
        alt={`Foto de perfil de ${profile.name}`}
        width={120}
        height={120}
        className="rounded-full mb-4"
        priority
      />

      {/* Nome e username */}
      <h1 className="text-3xl font-bold text-black dark:text-white">
        {profile.name}
      </h1>
      <p className="font-mono text-gray-500 text-sm mb-8">{profile.username}</p>

      {/* Links */}
      <div className="flex flex-col gap-3 w-full max-w-sm">
        {profile.links.map((link) => (
          <LinkButton key={link.url} link={link} />
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-10 text-xs text-gray-400 dark:text-gray-600">
        © {currentYear} Renan Tiberto. All rights reserved.
      </footer>
    </main>
  );
}