import CategoryPage from './components/pages/CatalogPage';
import Home from './components/pages/HomePage';
import ProductPage from './components/pages/ProductPage';
import RegisterPage from './components/pages/RegisterPage';
import Login from './components/pages/Login';
import CartPage from './components/pages/CartPage';
import { UserContext } from './context/Context';
import { useMemo, useState } from 'react';
import { UserInfoContextInterface, UserInfoInterface } from './interfaces/UserInfoInterface';

const App = () => {
/*   const [userInfo, setUserInfo] = useState<UserInfoInterface>({});
  const value = useMemo(() => ({
    userInfo, setUserInfo
  }), [userInfo]); */
  return (
    <Home/>
    // <CategoryPage/>
    // <ProductPage/>
    // <RegisterPage/>
    // <Login/>
    // <CartPage/>
/*     <UserContext.Provider value={value} >

    </UserContext.Provider> */
  )
}

export default App;
