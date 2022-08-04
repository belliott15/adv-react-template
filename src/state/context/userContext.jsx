import { createContext, useMemo, useState } from 'react';
import { getUser, getLocalProfile } from '../services/user-service';

export const UserStateContext = createContext();
export const UserActionContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(getUser());
  const [profile, setProfile] = useState(getLocalProfile());
  
  const stateValue = { user, profile };

  const actionValue = useMemo(() => ({
    setUser,
    setProfile
  }), [setUser, setProfile]);

  return (
    <UserStateContext.Provider value={stateValue}>
      <UserActionContext value={actionValue}>
        {children}  
      </UserActionContext>
    </UserStateContext.Provider>
  );
}