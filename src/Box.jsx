export default function Box(props) {
  let styles = { backgroundColor: props.isHeld ? "#59E391" : "#fff" };

  return (
    <div
      className="box"
      onClick={() => props.handleClick(props.id)}
      style={styles}
    >
      {props.num}
    </div>
  );
}
