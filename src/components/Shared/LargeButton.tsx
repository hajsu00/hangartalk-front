// import { useNavigate } from "react-router-dom";

type Props = {
  caption: string
  btnClass: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const LargeButton = (props: Props) => {
  // const navigate = useNavigate();
  return (
    <button onClick={props.onClick} className={props.btnClass}>
      {props.caption}
    </button>
  )
}
export default LargeButton