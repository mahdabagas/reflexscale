import { createContext, useState } from "react";

export const ProfileContext = createContext({});

const ProfileCtx = ({ children }) => {
  const token = window.localStorage.getItem("profile");
  const [user, setUser] = useState(
    token !== "undefined" ? JSON.parse(token) : {}
  );

  return (
    <ProfileContext.Provider value={{ user, setUser }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileCtx;
