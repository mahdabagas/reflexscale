import { createContext, useState } from "react";

export const LoginContext = createContext({});

const LoginCtx = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <LoginContext.Provider value={{ visible, setVisible }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginCtx;
