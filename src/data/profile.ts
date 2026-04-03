import { Profile } from "@/types";

export const profile: Profile = {
  name: "Renan Tiberto",
  username: "@renantiberto",
  avatarUrl: "/images/profile.jpg",
  links: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/renan-tiberto/",
      icon: "LinkedinLogoIcon",
      gradient: "from-sky-400 to-blue-600",
    },
    {
      label: "GitHub",
      url: "https://github.com/renantiberto/",
      icon: "GithubLogoIcon",
      gradient: "from-neutral-700 to-neutral-900",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/renantiberto/",
      icon: "InstagramLogoIcon",
      gradient: "from-blue-800 via-rose-500 to-yellow-400",
    },
    {
      label: "Currículo CV",
      url: "https://renantiberto.github.io/curriculo-web/",
      icon: "FileTextIcon",
      gradient: "from-slate-500 to-slate-300",
    },
    {
      label: "Spotify",
      url: "https://open.spotify.com/playlist/6ENnkPHSPxkDBZAP2GWjTE?si=97a275f777804363",
      icon: "SpotifyLogoIcon",
      gradient: "from-green-500 to-green-700",
    },
  ],
};
