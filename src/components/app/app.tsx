import '../../index.css';
import styles from './app.module.css';

import { Route, Routes } from 'react-router-dom';

import {
  ConstructorPage,
  Feed,
  ForgotPassword,
  Login,
  NotFound404,
  Profile,
  ProfileOrders,
  Register,
  ResetPassword
} from '@pages';
import { AppHeader, OrderInfo } from '@components';

const App = () => (
  <div className={styles.app}>
    <AppHeader />
    <Routes>
      <Route path='/' element={<ConstructorPage />} />
      <Route path='/feed' element={<Feed />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route path='/profile'>
        <Route index element={<Profile />} />
        <Route path='/profile/orders' element={<ProfileOrders />} />
      </Route>
      <Route path='*' element={<NotFound404 />} />
    </Routes>
  </div>
);

export default App;
