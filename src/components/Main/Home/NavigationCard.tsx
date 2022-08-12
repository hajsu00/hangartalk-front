// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LargeButton from '../../Shared/LargeButton'
import { useNavigate } from "react-router-dom";

const NavigationCard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-108 lg:w-96 p-8 lg:px-12 mt-0 max-w-3xl bg-white border border-gray-300 rounded-lg shadow-lg mx-auto">
        <div className="flex flex-col">
          <p className="text-center text-sm font-bold text-gray-800">新しくアカウントを作る</p>
          <div className="mt-2 mb-4">
            <LargeButton caption="アカウント登録" btnClass="btn btn-inactive-indigo rounded-lg" onClick={() => console.log("Clicked!")} />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-center text-sm font-bold text-gray-800">アカウントをお持ちの方</p>
          <div className="mt-2 mb-2">
            <LargeButton caption="ログイン" btnClass="btn btn-active-indigo rounded-lg" onClick={() => navigate("/sign_in")} />
          </div>
        </div>
      {/* <!-- ボーダー（始まり） --> */}
      <div className="w-full border-b-2 border-gray-300 py-2 mx-auto"></div>
      {/* <!-- ボーダー（終わり） --> */}
        <div className="flex flex-col mt-6">
          <p className="text-center text-sm font-bold text-gray-800">サービスを体験したい方はこちら</p>
          <div className="mt-2">
            <LargeButton caption="ゲストログイン（閲覧用）" btnClass="btn btn-inactive-gray rounded-lg" onClick={() => console.log("Clicked!")} />
          </div>
        </div>
    </div>
  )
}
export default NavigationCard