type Props = {
  caption: string
  btnClass: string
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void
}

const LargeButton = (props: Props) => {

  return (
    <button onClick={() => props.onClick} className={props.btnClass}>
      {props.caption}
    </button>
  )
}
export default LargeButton