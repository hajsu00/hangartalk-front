type Props = {
  caption: string
}

const Label = (props: Props) => {
  return (
    <label className="text-gray-800 text-sm sm:text-base">
      {props.caption}
    </label>
  )
}

export default Label