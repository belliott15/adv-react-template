import { useContext } from 'react';
import { UserActionContext, UserStateContext } from '../context/userContext';
import { 
  signIn as signInAction,
  signUp as signUpAction,
  upsertProfile,
} from '../services/user-service';



export default function useStatus() {
  const { user, profile } = useContext(UserStateContext);
  return { user, profile };
}

export function useAuth(){
  const { setUser } = useContext(UserActionContext);
    
  //create a function that takes credentials 
  //and passes them to multiple functions
  const createAction = (service) => async (credentials) => {
    const { user } = await service(credentials);

    if(user){
      setUser(user);
    }
  };
  const signIn = createAction(signInAction);
  const signUp = createAction(signUpAction);

  return { signIn, signUp };
  
}

export function useProfile(){
  const { profile } = useContext(UserStateContext);
  const { setProfile } = useContext(UserActionContext);

  const updateProfile = async (profile) => {
    const { data } = await upsertProfile(profile);
    if (data){
      setProfile(data);
    }
  };

  return [profile, updateProfile];
}
