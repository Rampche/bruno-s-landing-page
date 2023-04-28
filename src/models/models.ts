export type EventType = React.MouseEvent<HTMLButtonElement>;

export type SocialIcons = {
  Icon: React.ElementType /* React.ComponentType<{ size: string, className:string }> */;
  size: string;
  url: string;
};

export type NewsType = {
  title: string;
  content: string;
  image: string;
  link: string;
};
