import { StaticImageData } from "next/image";

export interface Proposal {
  banner: string;
  heading: string;
  copy: string;
}

export interface Testimony {
  client: string;
  avatarSrc: string | StaticImageData;
  testimonial: string;
  position: string;
}
