import {Route, Routes} from 'react-router-dom';
import {SignIn, SignUp, Home} from './templates';

const Router = () => {
  return (
    <Routes>
      <Route path={"/sign_in"}  element={<SignIn/>} />
      <Route path={"/sign_up"}  element={<SignUp/>} />
      <Route path={"/"} element={<Home/>} />
    </Routes>
  )
}
export default Router