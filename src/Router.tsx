import {Route, Routes} from 'react-router-dom';
import {Login, Home} from './templates';

const Router = () => {
  return (
    <Routes>
      <Route path={"/login"}  element={<Login/>} />
      <Route path={"/"} element={<Home/>} />
    </Routes>
  )
}
export default Router