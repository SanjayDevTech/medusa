export interface AdminCreateUser {
  email: string
  first_name?: string | null
  last_name?: string | null
  avatar_url?: string | null
  role?: string
}

export interface AdminUpdateUser {
  first_name?: string | null
  last_name?: string | null
  avatar_url?: string | null
  metadata?: Record<string, unknown> | null
  role?: string
}
