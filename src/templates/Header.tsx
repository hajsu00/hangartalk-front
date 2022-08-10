import { useRecoilState } from 'recoil'
import { userState } from '../recoil/users/stores'
import { useLocation } from 'react-router-dom'
import HeaderLogo from '../components/Header/HeaderLogo'
import HeaderNav from '../components/Header/HeaderNav'

const Header = () => {
  const [user, setUserState] = useRecoilState(userState)
  const isSignedIn = user.isSignedIn
  const location = useLocation();
  const currentUrl = location.pathname

  if (isSignedIn) {
    return (
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <HeaderLogo destination="#" />
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <HeaderNav caption="ログイン" destination="#" currentUrl={currentUrl} />
          </nav>
        </div>
      </header>
    )
  } else {
    return (
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <HeaderLogo destination="/" />
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {currentUrl == "/sign_up"
            ? <HeaderNav caption="ログイン" destination="/sign_in" currentUrl={currentUrl}/>
            : null
          }
          {currentUrl == "/sign_in"
            ? <HeaderNav caption="アカウント登録" destination="/sign_up" currentUrl={currentUrl} />
            : null
          }
          {currentUrl == "/"
            ? <>
                <HeaderNav caption="アカウント登録" destination="/sign_up" currentUrl={currentUrl} />
                <HeaderNav caption="ログイン" destination="/sign_in" currentUrl={currentUrl} />
              </>
            : null
          }
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
