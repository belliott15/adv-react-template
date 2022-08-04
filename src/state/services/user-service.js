import client from './supabase-client';

export function getUser(){ 
  return client.auth.user();
}

export async function signIn(credentials){
  return await client.auth.signIn(credentials);
}

export async function signUp(credentials){
  return await client.auth.signUp(credentials);
}

