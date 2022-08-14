import { useRecoilState } from 'recoil'
import { userState } from '../recoil/users/atoms'
import { useLocation } from 'react-router-dom'
import HeaderLogo from '../components/Header/HeaderLogo'
import HeaderButton from '../components/Header/HeaderButton'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUserState] = useRecoilState(userState)
  const isSignedIn = user.isSignedIn
  const location = useLocation();
  const currentUrl = location.pathname
  const navigate = useNavigate();
  const toSignInPage = () => {
    navigate('/sign_in')
  };
  const toSignUpPage = () => {
    navigate('/sign_up')
  };

  if (isSignedIn) {
    return (
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <HeaderLogo destination="#" />
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <HeaderButton caption="ログイン" onClick={toSignInPage} currentUrl={currentUrl} />
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
            ? <HeaderButton caption="ログイン" onClick={toSignInPage} currentUrl={currentUrl}/>
            : null
          }
          {currentUrl == "/sign_in"
            ? <HeaderButton caption="アカウント登録" onClick={toSignUpPage} currentUrl={currentUrl} />
            : null
          }
          {currentUrl == "/"
            ? <>
                <HeaderButton caption="アカウント登録" onClick={toSignUpPage} currentUrl={currentUrl} />
                <HeaderButton caption="ログイン" onClick={toSignInPage} currentUrl={currentUrl} />
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
