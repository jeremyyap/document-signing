import axios from "axios";
import React from "react";
import { useContext } from "react"
import { UserContext } from "./UserProvider";

export const AxiosContext = React.createContext(axios.create());

export const AxiosProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { user } = useContext(UserContext);
  console.log(user?.accessToken);
  const accessToken = user?.accessToken;

  const client = axios.create();
  client.interceptors.request.use(config => {
    if (config.headers && user) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  });

  return (
    <AxiosContext.Provider value={client}>
      { children }
    </AxiosContext.Provider>
  );
}

export const useAxios = () => useContext(AxiosContext);

