import { SupabaseClient } from "@supabase/supabase-js"

const AdoptersTable = "early-adopters"

const supabase = new SupabaseClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ADMIN_SECRET
)

export enum Verification {
  Verified = "verified",
  Unverified = "unverified"
}

export const addUserToWaitlist = async (body: {
  name: string
  email: string
  code: string
}) => {
  const value = await findUserBy({ email: body.email }).catch(() => "NONE")

  if (value !== "NONE") throw new Error("User already exist")

  const { data, error } = await supabase
    .from(AdoptersTable)
    .insert([{ ...body, status: Verification.Unverified }])

  if (error) throw error

  return data
}

const findUserBy = async (record: Record<string, string>) => {
  const { count } = await supabase
    .from(AdoptersTable)
    .select("*", { count: "exact", head: true })
    .match(record)

  if (count === 0) throw new Error("Record not found")

  return count
}

export const verifyUser = async ({ code }: { code: string }) => {
  await findUserBy({ code, status: Verification.Unverified })
  const { data, error } = await supabase
    .from(AdoptersTable)
    .update({
      status: Verification.Verified
    })
    .match({ code })

  if (error) throw error

  return data[0]
}
