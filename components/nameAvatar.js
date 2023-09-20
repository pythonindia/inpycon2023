function getRandomColor() {
  // Function to generate a random color
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function getContrastColor(backgroundColor) {
  // Function to get a contrasting text color based on the background color
  const hex = backgroundColor.slice(1);
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  // Use black or white text based on brightness
  return brightness > 128 ? '#000000' : '#ffffff';
}

const NameAvatar = (props) => {
  const initials = props.name.split(' ').map(word => word[0]).join('').toUpperCase();
  const backgroundColor = getRandomColor();
  const textColor = getContrastColor(backgroundColor);

  return (
    <div
      className={`name-initial-avatar ${props.className}`}
      style={{
        fontSize: 50,
        color: textColor,
        backgroundColor: backgroundColor
      }}
    >
      {initials}
    </div>)
};

export default NameAvatar;
