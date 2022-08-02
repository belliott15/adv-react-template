import client from './supabase-client';

export async function getFamiliesWithBunnies(){
  return await client.from('families').select(
    `id,
    name, 
    bunnies: bunnies(
        id,
        name,
        familyID: family_id
        )
        `);
}

