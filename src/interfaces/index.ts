import { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  buttonText?: string;
}

export type Feature = {
  icon: LucideIcon;
  isNew: boolean;
  title: string;
  desc: string;
  bgColor: string;
  iconColor: string;
};