export default function CustomButton({ text, variant }) {
  let buttonStyle = {};

  if (variant === "black") {
    buttonStyle = {
      backgroundColor: "black",
      color: "white",
      padding: "10px 20px",
      border: "none",
      cursor: "pointer",
      borderRadius: "20px",
      textAlign: "center",
    };
  } else if (variant === "bordered") {
    buttonStyle = {
      backgroundColor: "black",
      color: "white",
      padding: "10px 20px",
      border: "1px solid white",
      cursor: "pointer",
      borderRadius: "20px",
      textAlign: "center",
    };
  }

  return <button style={buttonStyle}>{text}</button>;
}
