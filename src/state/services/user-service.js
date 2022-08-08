import client from './supabase-client';

//gets the user from supabase
export function getUser(){ 
  return client.auth.user();
}

//checks the supabase users table and logs in current users
export async function signIn(credentials){
  return await client.auth.signIn(credentials);
}

//creates a new user in the users table
export async function signUp(credentials){
  return await client.auth.signUp(credentials);
}

//eliminate user/session
export function signOut(){
  return client.auth.signOut();
}

//gets a users profile from the user_profile table in supabase
export async function getProfile(){
  const user = getUser();

  return await client
    .from('user_profiles')
    .select()
    .eq('id', user.id)
    .single();
}

//updates profile
export async function upsertProfile(profile){
  const response = await client
    .from('user_profiles')
    .upsert(profile)
    .eq('id', profile.id)
    .single();

  return response;
}

const PROFILE = 'profile';

//gets the stored local profile on 
export async function getLocalProfile(){
  const json = localStorage.getItem(PROFILE);
  if(!json) return null;
  try{
    return JSON.parse(json);
  }catch (err) {
    localStorage.removeItem(PROFILE);
  }
}

//saves profile on the local system
export function saveLocalProfile(profile){
  localStorage.setItem(PROFILE, JSON.stringify(profile));
}

//removes the profile on the local system
export function removeLocalProfile(){
  localStorage.removeItem(PROFILE);
}

//if auth changes it will update the dom
export function onAuthChange(handleAuthChange) {
  return client.auth.onAuthStateChange(handleAuthChange);
}

//create a function to upload a photo and input it into supabase as a string
const AVATARS = 'avatars';

export async function uploadAvatar(userId, imgFile){
  //create a string to input into the supabase image bucket
  const imageName = `${userId}/${imgFile.name}`;

  //get access to the bucket
  const bucket = client.storage.from(AVATARS);

  const { data, error } = await bucket.upload(imageName, imgFile, {
    cacheControl: '3600',
    //upsert updates images to replace current image if they have the same name 
    upsert: true,
  });

  let url = null;

  if(!error) {
    url = bucket.getPublicUrl(
      data.Key.replace(`${AVATARS}/`, '')).publicURL;
  }

  return { url, error };
}
