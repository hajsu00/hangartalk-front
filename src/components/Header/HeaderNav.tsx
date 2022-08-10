import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

type Props = {
  caption: string
  destination: string
  currentUrl: string
}

const HeaderNav = (props: Props) => {
  return (
    <Link to={props.destination}>
      <div className="flex justify-center bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base mt-0 ml-10">
        <div className="flex flex-row my-auto">
          <p>{props.caption}</p>
          {props.currentUrl != "/" ?
            <div className=" ml-2 my-auto" >
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            : null
          }
        </div> 
      </div>
    </Link>
  )
}

export default HeaderNav