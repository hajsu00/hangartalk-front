import {useCallback, useState} from 'react';
import { Input, Label, LargeButton, CheckBox } from '../components/Shared';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState(""),
        [password, setPassword] = useState("");
  const inputEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {setEmail(event.target.value)}, [setEmail]);
  const inputPassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {setPassword(event.target.value)}, [setPassword]);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">ログイン</h2>

          <div className="max-w-lg border border-gray-300 rounded-lg shadow mx-auto">
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <Label caption="メールアドレス *" className="text-gray-800 text-base" />
                <Input type="email" value={email} required={true} onChange={inputEmail}
                />
              </div>

              <div>
                <Label caption="パスワード（半角英数字で６文字以上）*" className="text-gray-800 text-base" />
                <Input type="password" value={password} required={true} onChange={inputPassword}
                />

                <div className="flex my-auto">
                  <CheckBox />
                  <div className="ml-2">
                    <Label caption="次回から自動でログインする" className="text-gray-800 text-sm" />
                  </div>
                </div>
              </div>

              <LargeButton caption="ログイン" btnClass="btn btn-inactive-indigo mt-3 rounded-full" onClick={() => console.log("Clicked!")}
              />

              {/* <!-- ボーダー（始まり） --> */}
              <div className="w-full border-b-2 border-gray-300 py-2 mx-auto"></div>
              {/* <!-- ボーダー（終わり） --> */}

              <LargeButton caption="ゲストログイン（閲覧用）" btnClass="btn btn-inactive-gray mt-3 rounded-lg" onClick={() => console.log("Clicked!")}
              />
            </div>
          </div>

        {/* <!-- ナビゲーション --> */}
        <Link to="#" className="navigation-link mt-2 p-5">
          パスワードをお忘れの方はこちら
        </Link>
        <Link to="/sign_up" className="navigation-link p-1">
          アカウントをお持ちでない方はこちら
        </Link>
      </div>
    </div>
  )
}
export default SignIn