import Router from './Router'
import Header from './templates/Header'
import { useRecoilState } from 'recoil'
import { userState } from './recoil/users/stores'

const App = () => {
  const [user, setUserState] = useRecoilState(userState)
  console.log(user)
  return (
    <main>
      <Header />
      <Router />
    </main>
  )
}
export default App;
