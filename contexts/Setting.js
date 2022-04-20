import useSWR from "swr";
import { createContext, Fragment } from "react";

import { SETTING } from "../api";
import { Loading } from "../components";

export const Context = createContext({});

const Setting = ({ children }) => {
  const { data, error } = useSWR(SETTING);

  if (error) {
    return "Error";
  }

  return (
    <Fragment>
      <Loading isLoading={!data} />
      <Context.Provider value={{ ...data }}>{children}</Context.Provider>
    </Fragment>
  );
};

export default Setting;
