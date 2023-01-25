
import { BrowserRouter, Navigate, Route, Routes,useNavigate } from 'react-router-dom';

export const RequireAuth = ({ children }: any) => {
  const token:any = localStorage.getItem('token');
  return token?.length > 1 ? children : <Navigate to="" replace = {true} />;
}
