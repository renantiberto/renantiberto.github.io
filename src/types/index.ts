export type SocialLink = {
  label: string;
  url: string;
  icon: string;
  gradient: string;
};

export type Profile = {
  name: string;
  username: string;
  avatarUrl: string;
  links: SocialLink[];
};