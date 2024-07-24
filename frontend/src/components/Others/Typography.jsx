export const Typography = ({ text, value }) => {
  return (
    <div style={{ display: "flex", marginBottom: "20px" }}>
      <div style={{ color: "#ffffffcc", marginRight: "5px" }}> {text}: </div>
      <div style={{ color: "#ffffff" }}> {value} </div>
    </div>
  );
};
