import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { setUser, selectUser } from "../../store/userSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";

import "./Header.css";

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(
        setUser({
          id: 1,
          name: "Иван Иванов",
          email: "ivan@example.com",
        })
      );
    }, 500);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <header className="header">
      <h1>🛒 Интернет-магазин</h1>
      <div className="user-info">
        {user ? <span>Привет, {user.name}!</span> : <span>Загрузка...</span>}
      </div>
    </header>
  );
};
