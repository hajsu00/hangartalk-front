import { useRecoilState } from 'recoil'
import { userState } from '../recoil/atoms'

const Home = () => {
  const [user, setUserState] = useRecoilState(userState)
  console.log(user)
  return (
    <h2>Home</h2>
  )
}
export default Home