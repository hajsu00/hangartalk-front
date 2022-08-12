import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
  fontawesomeIcon: IconProp
  caption: string
  text: string
}

const FeatureCard = (props: Props) => {
  return (
    <div className="flex flex-col w-72 h-84 bg-white border border-gray-300 rounded-lg shadow-lg mx-auto p-8 mx-8 my-4">
      <div className="fa-3x text-gray-700 mx-auto">
        <FontAwesomeIcon icon={props.fontawesomeIcon} />
      </div>
      <div className="text-base font-bold text-gray-800 text-center mt-4">
        {props.caption.split('\n').map((text, index) => (<div key={index}>{text}</div>))}
      </div>
      {/* <!-- ボーダー（始まり） --> */}
      <div className="w-full border-b-2 border-gray-300 py-2 mx-auto"></div>
      {/* <!-- ボーダー（終わり） --> */}
      <div className="mt-8">
        <p className="text-base text-gray-800 text-center">
          {props.text}
        </p>
      </div>
    </div>
  )
}
export default FeatureCard