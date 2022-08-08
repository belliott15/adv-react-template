import { useContext } from 'react';
import { UserActionContext, UserStateContext } from '../context/UserContext';
import { 
  signIn as signInAction,
  signUp as signUpAction,
  signOut as signOutAction,
  upsertProfile,
  uploadAvatar,
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
  const signOut = createAction(signOutAction);

  return { signIn, signUp, signOut };
  
}

export function useProfile(){
  const { user, profile } = useContext(UserStateContext);
  const { setProfile } = useContext(UserActionContext);

  const updateProfile = async ({ avatar, ...profile }) => {
    const { url, error } = await uploadAvatar(user.id, avatar);
    if (error) {
      console.log(error);
    }

    if(url){
      const { data } = await upsertProfile({ ...profile, avatar: url });

      if (error){
        console.log(error);
      }
      if (data){
        setProfile(data);
      }
    }
  };

  return [profile, updateProfile];
}
