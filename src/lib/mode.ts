export const RESUMEX_MODE = (import.meta.env.VITE_RESUMEX_MODE ?? 'local') as
  | 'local'
  | 'public'

export const isLocal = RESUMEX_MODE === 'local'
export const isPublic = RESUMEX_MODE === 'public'
