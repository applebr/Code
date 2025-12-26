import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check local storage for persisted session
    const storedUser = localStorage.getItem('couponhub_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (provider) => {
    setIsLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Mock User Data
    const mockUser = {
      id: 'u1',
      name: '김게이머',
      email: 'gamer@example.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
      provider: provider
    };

    setUser(mockUser);
    localStorage.setItem('couponhub_user', JSON.stringify(mockUser));
    setIsLoading(false);
    return mockUser;
  };

  const logout = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser(null);
    localStorage.removeItem('couponhub_user');
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
