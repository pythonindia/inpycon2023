import { FaInstagram, FaLinkedin, FaTwitter, FaMastodon } from "react-icons/fa6";

export const icons = {
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  mastodon: FaMastodon,
  twitter: FaTwitter,
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