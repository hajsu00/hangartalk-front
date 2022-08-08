import { useRecoilState } from 'recoil'
import { userState } from '../recoil/users/stores'
import HeaderLogo from '../components/Header/HeaderLogo'
import HeaderNav from '../components/Header/HeaderNav'

const Header = () => {
  const [user, setUserState] = useRecoilState(userState)
  const isSignedIn = user.isSignedIn
  if (isSignedIn) {
    return (
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <HeaderLogo />
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <HeaderNav />
          </nav>
        </div>
      </header>
    )
  } else {
    return (
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <HeaderLogo />
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <HeaderNav />
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
