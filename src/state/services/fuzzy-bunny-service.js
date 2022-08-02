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

