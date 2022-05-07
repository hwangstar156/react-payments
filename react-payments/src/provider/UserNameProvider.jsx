import { createContext, useCallback, useState } from "react";
import { isOverMaxLength } from "util/validator";
import { MAX_LENGTH } from "constants";

export const UserNameContext = createContext();

const initialState = "";

const UserNameProvider = ({ children }) => {
  const [userName, setUserName] = useState(initialState);

  const onChangeUserName = ({ target }) => {
    if (isOverMaxLength(target, MAX_LENGTH.USER_NAME)) {
      return;
    }
    setUserName(target.value);
  };

  const resetUserName = useCallback(() => {
    setUserName(initialState);
  }, []);

  return (
    <UserNameContext.Provider
      value={{
        state: { userName },
        action: { onChangeUserName, resetUserName, setUserName },
      }}
    >
      {children}
    </UserNameContext.Provider>
  );
};

export default UserNameProvider;
