import { BlackPinkData } from "@content";
import { Images, Icons } from "@assets";
import { BlackPinkCardPropsTypes } from "@types";

export const BlackPinkCard = ({
  image,
  stageName,
  birthName,
  position,
  birthday,
  birthplace,
  socialMedia,
}: BlackPinkCardPropsTypes) => {
  return (
    <div className="flex flex-col max-w-80 w-80 bg-white shadow-lg overflow-hidden rounded-xl">
      <div className="h-80 overflow-hidden">
        <img className="block w-full" src={image} alt={stageName} />
      </div>
      <div className="h-60 flex flex-col p-5">
        <div className="flex flex-col">
          <span className="font-bold text-2xl mb-2">{stageName}</span>
          <span className="font-light text-sm">Birthname: {birthName}</span>
          <span className="font-light text-sm">
            Role: {position.map((role) => `${role}, `)}
          </span>
          <span className="font-light text-sm">Birthdate: {birthday}</span>
          <span className="font-light text-sm">Birthplace: {birthplace}</span>
        </div>

        <div className="flex items-center justify-evenly mt-auto pt-4 border-t border-t-black">
          {socialMedia.instagram && (
            <a className="w-auto h-5" href={socialMedia.instagram}>
              <img
                className="block w-full h-full"
                src={Icons.instagramIcon}
                alt="Youtube Icon"
              />
            </a>
          )}
          {socialMedia.weibo && (
            <a className="w-auto h-5" href={socialMedia.weibo}>
              <img
                className="block w-full h-full"
                src={Icons.weiboIcon}
                alt="Youtube Icon"
              />
            </a>
          )}
          {socialMedia.youtube && (
            <a className="w-auto h-5" href={socialMedia.youtube}>
              <img
                className="block w-full h-full"
                src={Icons.youtubeIcon}
                alt="Youtube Icon"
              />
            </a>
          )}
          {socialMedia.tiktok && (
            <a className="w-auto h-5" href={socialMedia.tiktok}>
              <img
                className="block w-full h-full"
                src={Icons.tiktokIcon}
                alt="Youtube Icon"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
