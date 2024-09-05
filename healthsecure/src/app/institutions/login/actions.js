'use server'
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "../../../../utils/supabase/server";

export async function login(formData) {
  const supabase = createClient()

  // const data = {
  //   email: formData.get('email'),
  //   password: formData.get('password')
  // }

  const { error } = await supabase.auth.signInWithPassword(formData)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function signup(formData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  // const data = {
  //   email: formData.get('email'),
  //   password: formData.get('password'),
  // }

  const { error } = await supabase.auth.signUp(formData)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}