export type Media = {
  id: number;
  link: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type GetMediaResponse = {
  media: Media[];
};
