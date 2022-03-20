import { Image } from "../../hoc";

const TopBanner = ({ imageSrc }) => {
  if (imageSrc === undefined) {
    return null;
  }
  return <Image src={imageSrc} width={1920} height={1080} objectPosition={"0 0"} alt="Trinix" />;
};

export default TopBanner;
