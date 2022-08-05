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

export function saveLocalProfile(profile){
  localStorage.setItem(PROFILE, JSON.stringify(profile));
}

export function removeLocalProfile(){
  localStorage.removeItem(PROFILE);
}

export function onAuthChange(handleAuthChange) {
  return client.auth.onAuthStateChange(handleAuthChange);
}
