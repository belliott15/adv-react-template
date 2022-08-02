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

export async function removeFamily(id) {
  const response = await client
    .from('families')
    .delete()
    .eq('id', id)
    .single();

  return response;
}

export async function addFamily(family){
  const response = await client
    .from('families')
    .insert(family)
    .single();

  return response;
}

