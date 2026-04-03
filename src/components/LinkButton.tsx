import React from "react";
import {
  LinkedinLogoIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  FileTextIcon,
  SpotifyLogoIcon
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import type { SocialLink } from "@/types";

const iconMap: Record<string, Icon> = {
  LinkedinLogoIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  FileTextIcon,
  SpotifyLogoIcon
};

type Props = {
  link: SocialLink;
};

export function LinkButton({ link }: Props) {
  const Icon = iconMap[link.icon];

  return (
    
    <a  href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      title={link.label}
      className={`w-full max-w-sm h-14 rounded-full px-8 bg-linear-to-br ${link.gradient} flex items-center justify-between text-white font-medium text-base transition-opacity duration-200 hover:opacity-90`}
    >
      <span>{link.label}</span>
      {Icon && <Icon size={24} weight="bold" />}
    </a>
  );
}