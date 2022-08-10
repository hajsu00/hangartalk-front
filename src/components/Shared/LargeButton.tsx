import { useNavigate } from "react-router-dom";

type Props = {
  caption: string
  btnClass: string
  destination: string
}

const LargeButton = (props: Props) => {
  const navigate = useNavigate();
  const toDestination = () => {
    navigate(props.destination)
  }
  return (
    <button onClick={toDestination} className={props.btnClass}>
      {props.caption}
    </button>
  )
}
export default LargeButton