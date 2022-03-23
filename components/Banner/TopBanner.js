import { Image } from "../../hoc";

const TopBanner = ({ imageSrc, width = 1920, height = 1080, ...props }) => {
  if (imageSrc === undefined) {
    return null;
  }
  return (
    <Image
      src={imageSrc}
      width={width}
      height={height}
      objectPosition={"center center"}
      alt="Trinix"
      {...props}
    />
  );
};

export default TopBanner;
