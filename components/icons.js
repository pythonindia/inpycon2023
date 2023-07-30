import { FaBars, FaEnvelope, FaFacebook, FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaMastodon, FaTwitter } from "react-icons/fa6";
import { SiZulip } from "react-icons/si";


export const icons = {
  bars: FaBars,
  envelope: FaEnvelope,
  facebook: FaFacebook,
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  mastodon: FaMastodon,
  twitter: FaTwitter,
  website: FaGlobe,
  zulip: SiZulip
};

export const IconComponent = ({ ...props }) => {
  const Icon = icons[props.name];
  return <Icon
    size={props.size}
    color={props.color}
    style={{ backgroundColor: props.backgroundColor, padding: 8, borderRadius: 4 }} />;
}

IconComponent.defaultProps = {
  size: 36,
  color: '#FFF',
  backgroundColor: '1f928d'
};

export default IconComponent;