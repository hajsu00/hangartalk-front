import { useRecoilState } from 'recoil'
import { userState } from '../../recoil/users/atoms'
import { Link } from 'react-router-dom'

type Props = {
  destination: string
}

const HeaderLogo = (props: Props) => {
  const [user, setUserState] = useRecoilState(userState)
  const isSignedIn = user.isSignedIn
  return (
    <Link to={props.destination}>
      <img src={`${process.env.PUBLIC_URL}/hangartalk_logo.png`} alt="Logo" className="w-64" />
    </Link>
  )
}

export default HeaderLogo