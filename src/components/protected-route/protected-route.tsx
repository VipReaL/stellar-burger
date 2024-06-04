import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Preloader } from '../ui/preloader';

type ProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children: React.ReactElement;
};

export const ProtectedRoute = ({ onlyUnAuth, children }: ProtectedRouteProps) =>
  // const isAuthChecked = useSelector(isAuthCheckedSelector); // isAuthCheckedSelector — селектор получения состояния загрузки пользователя
  // const user = useSelector(userDataSelector); // userDataSelector — селектор получения пользователя из store

  //   if (!isAuthChecked) { // пока идёт чекаут пользователя, показываем прелоадер
  //     return <Preloader />;
  //   }

  //   if (!onlyUnAuth && !user) { // если пользователь на странице авторизации и данных в хранилище нет, то делаем редирект
  //     return <Navigate replace to='/login'/>;
  //   }

  //   if (onlyUnAuth && user) { // если пользователь на странице авторизации и данные есть в хранилище
  //     return <Navigate replace to="/list" />;
  //   }

  children;
