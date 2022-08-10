// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LargeButton from '../../Shared/LargeButton'

const NavigationCard = () => {
  return (
    <div className="flex flex-col w-108 lg:w-96 p-8 lg:px-12 mt-0 max-w-3xl bg-white border border-gray-300 rounded-lg shadow-lg mx-auto">
        <div className="flex flex-col">
          <p className="text-center text-sm font-bold text-gray-800">新しくアカウントを作る</p>
          <div className="mt-2 mb-4">
            <LargeButton caption="アカウント登録" btnClass="btn btn-inactive-indigo" destination="/sign_up" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-center text-sm font-bold text-gray-800">アカウントをお持ちの方</p>
          <div className="mt-2 mb-2">
            <LargeButton caption="ログイン" btnClass="btn btn-active-indigo" destination="/sign_in" />
          </div>
        </div>
      {/* <!-- ボーダー（始まり） --> */}
      <div className="w-full border-b-2 border-gray-300 py-2 mx-auto"></div>
      {/* <!-- ボーダー（終わり） --> */}
        <div className="flex flex-col mt-6">
          <p className="text-center text-sm font-bold text-gray-800">サービスを体験したい方はこちら</p>
          <div className="mt-2">
            <LargeButton caption="ゲストログイン（閲覧用）" btnClass="btn btn-inactive-gray" destination="/sign_in" />
          </div>
        </div>
    </div>
  )
}
export default NavigationCard