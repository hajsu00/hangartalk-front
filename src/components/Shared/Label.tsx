type Props = {
  caption: string
  className: string
}

const Label = (props: Props) => {
  return (
    <label className={props.className}>
      {props.caption}
    </label>
  )
}

export default Label