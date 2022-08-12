type Props = {
  type: string
  value?: string
  className: string
  required: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: Props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      className={props.className}
      required={props.required}
      onChange={props.onChange}
    />
  )
}

export default Input