import { selector } from 'recoil'
import { userState } from './atoms'

// const charCountState = selector({
//   key: 'charCountState',
//   //Atomの値を加工して返す関数を設定
//   get: ({get}) => {
//     //const 状態変数 = get(Atomのkey)
//     const user = get(userState)
//     //加工した値を返す
//     return user.isSignedIn
//   }
// })