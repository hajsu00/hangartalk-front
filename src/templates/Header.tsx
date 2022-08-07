import { useRecoilState } from 'recoil'
import { userState } from '../recoil/users/stores'

const Header = () => {
  const [user, setUserState] = useRecoilState(userState)
  const isSignedIn = user.isSignedIn
  if (isSignedIn) {
    return (
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* <%= link_to image_tag('hangartalk_logo.png', class: "w-64"), user_path(current_user.id) %> */}
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <div className="relative group w-56">
              <div className="flex justify-center bg-gray-100 border-0 p-2 focus:outline-none hover:bg-gray-200 rounded text-base mt-0">
                <div className="flex flex-row my-auto">
                  {/* <%= current_user.name.truncate(14) %> */}
                  <i className="fa-solid fa-arrow-down ml-2 my-auto"></i>
                </div>
              </div> 
              <div className="absolute invisible group-hover:visible bg-white shadow rounded w-full px-3 py-2 z-10">
                <ul className="space-y-2">
                  <li>プロフィール</li>
                  <li>アカウント</li>
                  <li>ログアウト</li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* <%= link_to image_tag('hangartalk_logo.png', class: "w-64"), root_path %> */}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* <%= yield :header_action %> */}
          <p className="text-3xl font-bold underline">aaaa</p>
        </nav>
      </div>
    </header>
  )
}

export default Header
