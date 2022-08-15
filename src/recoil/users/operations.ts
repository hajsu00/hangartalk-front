import { useRecoilState } from 'recoil'
import { userState } from './atoms'

export const signIn = (email: string, password: string) => {
  return async () => {

    // const [user, setUser] = useRecoilState(userState)
    // // 入力値でAtomを更新
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setUser(event.target.value)
    // }

    // Validation
    if (email === "" || password === "") {
      alert("必須項目が未入力です")
      return false
    }


  }
 }