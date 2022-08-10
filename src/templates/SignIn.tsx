import {useCallback, useState} from 'react';
import TextInput from '../components/Shared/TextInput';
import Label from '../components/Shared/Label';

export type TextInput = {
  fullWidth: boolean
  label: string
  margin?: string
  multiline: boolean
  required: boolean
  rows: number
  value: string
  type: string
}

const SignIn = () => {
  const [email, setEmail] = useState(""),
        [password, setPassword] = useState("");
  const inputEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {setEmail(event.target.value)}, [setEmail]);
  const inputPassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {setPassword(event.target.value)}, [setPassword]);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">ログイン</h2>
        {/* <%= form_with(model: @user, url: session_path(@user)) do |f| %> */}
          <div className="flex justify-center items-center p-4">
            {/* <%= render "devise/shared/error_messages", resource: resource %> */}
          </div>
          <div className="max-w-lg border border-gray-300 rounded-lg shadow mx-auto">
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                {/* <%= f.label :email, "メールアドレス *", class: 'inline-block text-gray-800 text-sm sm:text-base mb-2' %>
                <%= f.text_field :email, autofocus: true, autocomplete: "email", class: 'w-full bg-gray-50 text-gray-800 border border-gray-300 focus:ring ring-indigo-500 rounded outline-none transition duration-100 px-3 py-2' %> */}
              </div>
              <div>
                {/* <%= f.label :password, "パスワード（半角英数字で６文字以上）*", class: 'inline-block text-gray-800 text-sm sm:text-base mb-2' %>
                <%= f.password_field :password, autocomplete: "current-password", class: 'w-full bg-gray-50 text-gray-800 border border-gray-300 focus:ring ring-indigo-500 rounded outline-none transition duration-100 px-3 py-2' %> */}
              </div>
              <Label />
              <TextInput type="text" value="" />
              {/* <% if devise_mapping.rememberable? %> */}
                <div className="field">
                  {/* <%= f.check_box :remember_me, checked: false %>
                  <%= f.label :remember_me, "次回から自動でログインする" %> */}
                </div>
              {/* <% end %>
              <!-- 認証メール送信ボタン -->
              <%= f.submit yield(:button_text), class: "cursor-pointer block bg-indigo-800 hover:bg-indigo-700 active:bg-indigo-600 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-full outline-none transition duration-100 px-8 py-3 mt-4" %> */}
              {/* <!-- ボーダー（始まり） --> */}
              <div className="w-full border-b-2 border-gray-300 py-2 mx-auto"></div>
              {/* <!-- ボーダー（終わり） --> */}
              {/* <%= link_to users_guest_sign_in_path, method: :post do %> */}
                <div className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 mt-3">
                  ゲストログイン（閲覧用）
                </div>
              {/* <% end %> */}
            </div>
          </div>
        {/* <% end %> */}
        {/* <!-- ナビゲーション --> */}
        <div className="flex justify-center items-center p-5">
          {/* <%= link_to "パスワードをお忘れの方はこちら", new_user_password_path, class: "text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100 mt-2" %> */}
        </div>
        <div className="flex justify-center items-center p-1 ">
          {/* <%= link_to "アカウントをお持ちでない方はこちら", new_user_registration_path, class: "text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100" %> */}
        </div>
      </div>
    </div>
  )
}
export default SignIn