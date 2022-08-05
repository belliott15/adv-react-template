import { createContext, useEffect, useMemo, useState } from 'react';
import { 
  getUser, 
  getLocalProfile, 
  getProfile,
  saveLocalProfile,
  removeLocalProfile,
  onAuthChange 
} from '../services/user-service';

export const UserStateContext = createContext();
export const UserActionContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(getUser());
  const [profile, setProfile] = useState(getLocalProfile());

  const loadProfile = async () => {
    const { data, error } = await getProfile();
    if (error){
      console.log(error);
    }
    if (data){
      setProfile(data);
      saveLocalProfile(data);
    }
  };

  useEffect(() => {
    if (user) loadProfile();

    const { data } = onAuthChange((event) => {
      if (event === 'SIGNED_IN') loadProfile();
      if (event === 'SIGNED_OUT') {
        setUser(null);
        setProfile(null);
        removeLocalProfile();
      }
    });

    return () => data.unsubscribe();

  }, []);
  
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
