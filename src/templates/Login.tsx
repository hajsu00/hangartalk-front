import { push } from 'connected-react-router';

const Login = () => {
  return (
    <div>
      <h2>ログイン</h2>
      {/* <button onClick={() => dispatch(push('/'))}> */}
      <button onClick={() => push('/')}>
        ログイン
      </button>
    </div>
  )
}
export default Login