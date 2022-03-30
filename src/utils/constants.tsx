import { GlobeIcon, StarIcon, ThumbUpIcon } from "@heroicons/react/solid";

type Program = {
  icon: React.ReactNode;
  iconBgColor: "pink" | "yellow" | "brown";
  title: string;
  content: string;
};

export const PROGRAMS: Program[] = [
  {
    icon: <StarIcon className="w-8 h-8 text-white" />,
    iconBgColor: "pink",
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
  {
    icon: <GlobeIcon className="w-8 h-8 text-white" />,
    iconBgColor: "yellow",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
  {
    icon: <ThumbUpIcon className="w-8 h-8 text-white" />,
    iconBgColor: "brown",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
];

export const IMAGE_URL = "http://helto-be-feminovialina.vercel.app/public";

export const DAYS_OF_THE_WEEK = [
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
  "Minggu",
];

export const MONTHS = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "November",
  "Desember",
];
