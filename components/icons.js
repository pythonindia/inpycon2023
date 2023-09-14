import { FaBars, FaBriefcase, FaBuilding, FaCircleArrowRight, FaEnvelope, FaFacebook, FaGithub, FaLocationDot, FaGlobe, FaInstagram, FaLinkedin, FaMastodon, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa6";
import { SiZulip } from "react-icons/si";


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
  twitter: FaTwitter,
  website: FaGlobe,
  youtube: FaYoutube,
  zulip: SiZulip
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
