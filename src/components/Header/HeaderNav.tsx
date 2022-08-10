import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

type Props = {
  caption: string
  destination: string
  currentUrl: string
}

const HeaderNav = (props: Props) => {
  const navigate = useNavigate();
  const toDestination = () => {
    navigate(props.destination)
  }
  return (
    <button onClick={toDestination} className="flex justify-center bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base mt-0 ml-10" >
      <div className="flex flex-row my-auto">
        {props.caption}
        {props.currentUrl != "/"
        ? <FontAwesomeIcon icon={faArrowRight} className="ml-2 my-auto" />
        : null
        }
      </div>
    </button>
  )
}

export default HeaderNav