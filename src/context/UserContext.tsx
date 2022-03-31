import React, { createContext, useContext, useEffect, useState } from "react";
import { AxiosError } from "axios";
import { coreAPI } from "../api";
import useSnackbar from "../hooks/useSnackbar";
import { getUserInfo } from "../models/auth";
import { UserInfo } from "../types/entities/auth";

type UserState = {
  isAuthenticated: boolean;
  userInfo: UserInfo;
  loginUser: (token: string, userId: number) => void;
  logoutUser: () => void;
  fetchUserInfo: () => void;
};

const defaultValue: UserState = {
  isAuthenticated: !!localStorage.getItem("token"),
  loginUser: () => {},
  logoutUser: () => {},
  fetchUserInfo: () => {},
  userInfo: {} as UserInfo,
};

const UserContext = createContext(defaultValue);

export const UserWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    defaultValue.isAuthenticated
  );
  const [userInfo, setUserInfo] = useState<UserInfo>(defaultValue.userInfo);

  const snackbar = useSnackbar();

  const loginUser = (token: string, userId: number) => {
    coreAPI.interceptors.request.use((config) => {
      config.headers!.Authorization = `Bearer ${token}`;
      return config;
    });
    localStorage.setItem("userId", userId.toString());
    localStorage.setItem("token", `Bearer ${token}`);
    setIsAuthenticated(true);
  };

  const logoutUser = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    coreAPI.defaults.headers.common["Authorization"] = "";
  };

  const fetchUserInfo = async () => {
    try {
      const { data } = await getUserInfo();
      if (data.data) {
        setUserInfo(data.data);
      }
    } catch (e) {
      snackbar.error((e as AxiosError).response?.data.message);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchUserInfo();
    }
  }, [isAuthenticated]);

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        loginUser,
        logoutUser,
        userInfo,
        fetchUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
