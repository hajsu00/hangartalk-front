type Props = {
  type: string
  value: string
  required: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = (props: Props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      required={props.required}
      onChange={props.onChange}
      className="w-full bg-gray-50 text-gray-800 border border-gray-300 focus:ring ring-indigo-500 rounded outline-none transition duration-100 px-3 py-2 my-2"
    />
  )
}

export default TextInput