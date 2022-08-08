import { useRecoilState } from 'recoil'
import { userState } from '../../recoil/users/stores'

const UserMenu = () => {
  const [user, setUserState] = useRecoilState(userState)
  const isSignedIn = user.isSignedIn

  return (
    <div className="relative group w-56">
      <div className="flex justify-center bg-gray-100 border-0 p-2 focus:outline-none hover:bg-gray-200 rounded text-base mt-0">
        <div className="flex flex-row my-auto">
          {/* <%= current_user.name.truncate(14) %> */}
          <div>ユーザーネーム</div>
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
  )
}

export default UserMenu