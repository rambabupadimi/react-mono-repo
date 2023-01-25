
import { BrowserRouter, Navigate, Route, Routes,useNavigate } from 'react-router-dom';

export const RequireDashboard = ({ children }:any) => {
  const token:any = localStorage.getItem('token');
  return token?.length > 1 ? <Navigate to="/users" replace = {true} /> : children ;
}
