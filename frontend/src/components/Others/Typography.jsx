export const Typography = ({ text, value, marginBottom }) => {
  return (
    <div style={{ display: "flex", marginBottom: `${marginBottom ?? "0"}` }}>
      <div style={{ color: "#ffffffcc", marginRight: "5px" }}> {text}: </div>
      <div style={{ color: "#ffffff" }}> {value} </div>
    </div>
  );
};
