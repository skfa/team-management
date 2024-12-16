import React, {
    createContext,
    useState,
    useContext,
    ReactNode
  } from 'react';

import APIService from '../services/api';

  // User interface
  interface User {
    id: number;
    username: string;
    email: string;
  }

  // Authentication state interface
  interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
  }

  // Authentication context type
  interface AuthContextType {
    auth: AuthState;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
  }

  // Create authentication context
  const AuthContext = createContext<AuthContextType>({
    auth: {
      isAuthenticated: false,
      user: null,
      token: null
    },
    login: async () => false,
    logout: () => {}
  });

  // Authentication Provider Component
  export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [auth, setAuth] = useState<AuthState>({
      isAuthenticated: false,
      user: null,
      token: null
    });
    const apiService = new APIService();
    const login = async (email: string, password: string): Promise<boolean> => {
      try {
        // Simulated API call

        const response = await apiService.post('/api/user/token/', {
          email, password
        });

        if (response.ok) {
          const { user, token } = await response.json();
          setAuth({
            isAuthenticated: true,
            user,
            token
          });
          return true;
        }
        return false;
      } catch (error) {
        console.error('Login failed', error);
        return false;
      }
    };

    const logout = () => {
      setAuth({
        isAuthenticated: false,
        user: null,
        token: null
      });
    };

    return (
      <AuthContext.Provider value={{ auth, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };

  // Custom hook for using authentication context
  export const useAuth = () => {
    return useContext(AuthContext);
  };