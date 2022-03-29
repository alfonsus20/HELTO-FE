import React from "react";

type NewsCardProps = {
  imageUrl: string;
  title: string;
  content: string;
};

const NewsCard = ({ imageUrl, title, content }: NewsCardProps) => {
  return (
    <div className="flex gap-2 xs:gap-4 items-center">
      <img
        src={imageUrl}
        alt="berita"
        className="flex-shrink-0 w-24 xs:w-40 md:w-44 h-24 xs:h-28 md:h-32 rounded-md object-cover"
      />
      <div className="text-sm md:text-base">
        <h5 className="font-bold text-brown-700 xs:mb-2">{title}</h5>
        <p className="line-clamp-3">{content}</p>
      </div>
    </div>
  );
};

export default NewsCard;
