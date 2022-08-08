import { useRecoilState } from 'recoil'
import { userState } from '../../recoil/users/stores'
import { Link } from 'react-router-dom'

const HeaderLogo = () => {
  const [user, setUserState] = useRecoilState(userState)
  const isSignedIn = user.isSignedIn
  if (isSignedIn) {
    return (
      <Link to="#">
        <img src={`${process.env.PUBLIC_URL}/hangartalk_logo.png`} alt="Logo" className="w-64" />
      </Link>
    )
  } else {
    return (
      <Link to="/">
        <img src={`${process.env.PUBLIC_URL}/hangartalk_logo.png`} alt="Logo" className="w-64" />
      </Link>
    )
  }
}

export default HeaderLogo