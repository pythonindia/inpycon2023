import { FaWindowClose } from "react-icons/fa";
import { FaBars, FaBriefcase, FaBuilding, FaArrowUpRightFromSquare, FaMaximize, FaCircleArrowRight, FaEnvelope, FaFacebook, FaGithub, FaLocationDot, FaGlobe, FaInstagram, FaLinkedin, FaMastodon, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa6";
import { SiZulip } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";

export const icons = {
  arrowRight: FaCircleArrowRight,
  bars: FaBars,
  mail: FaEnvelope,
  building: FaBuilding,
  briefCase: FaBriefcase,
  location: FaLocationDot,
  facebook: FaFacebook,
  github: FaGithub,
  instagram: FaInstagram,
  medium: FaMedium,
  linkedin: FaLinkedin,
  mastodon: FaMastodon,
  twitter: RiTwitterXFill,
  website: FaGlobe,
  youtube: FaYoutube,
  close: FaWindowClose,
  maximizeWindow: FaMaximize,
  newTab: FaArrowUpRightFromSquare,
  zulip: SiZulip,

};

export const IconComponent = ({ ...props }) => {
  const Icon = icons[props.name];
  const iconProps = {
    className: props.className,
    size: props.size,
    style: { backgroundColor: props.backgroundColor, padding: props.padding, borderRadius: 4 }
  };

  if (props.color) {
    iconProps.color = props.color;
  }

  return <Icon {...iconProps} />;
}

IconComponent.defaultProps = {
  size: 36,
  backgroundColor: "transparent",
  padding: 8,
  className: ""
};

export default IconComponent;
