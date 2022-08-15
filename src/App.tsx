import Router from './Router'
import { Header, Footer, SideBar } from './templates'
import { useRecoilState } from 'recoil'
import { userState } from './recoil/users/atoms'

const App = () => {
  const [user, setUserState] = useRecoilState(userState)
  console.log(user)
  const isSignedIn = user.isSignedIn
  // const isSignedIn = true
  if (isSignedIn) {
    return (
      <main>
        <Header />
        <div className="container flex flex-wrap-reverse mx-auto px-4">
          <article className='w-full xl:w-4/12'>
            <SideBar />
          </article>
          <article className='w-full xl:w-8/12'>
            {/* <% if flash.any? %>
              <%= render 'layouts/notification' %>
            <% end %> */}
            <div className="mx-auto px-4">
              <div className="flex flex-row px-4 mb-4">
                {/* <%= link_to 'javascript:history.back()' do %> */}
                  <i className="fa-solid fa-angle-left fa-2x pr-4"></i>
                {/* <% end %> */}
                <div className="flex flex-col">
                  <div className="text-xl font-bold pr-4">
                    {/* <%= yield(:title) %> */}
                    ページタイトル
                  </div>
                  <div className="text-sm">
                    {/* <%= yield :supplementary_information %> */}
                    補足情報
                  </div>
                </div>
              </div>
              {/* <%= yield %>  */}
              <Router />
            </div>
          </article>
        </div>
        <Footer />
      </main>
    )
  } else {
    return (
      <main>
        <Header />
        <Router />
        <Footer />
      </main>
    )
  }

}
export default App;
