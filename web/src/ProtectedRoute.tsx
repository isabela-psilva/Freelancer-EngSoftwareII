import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Verifica se existe um usuário logado salvo no localStorage
  const usuarioLogado = localStorage.getItem('usuarioLogado');

  // Se não estiver logado, redireciona para a tela de Login
  if (!usuarioLogado) {
    return <Navigate to="/Login" replace />;
  }

  // Se estiver logado, renderiza a página solicitada
  return <>{children}</>;
};

export default ProtectedRoute;