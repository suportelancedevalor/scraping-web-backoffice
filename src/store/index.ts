
import { createStore, Store, useStore } from "vuex"
import { InjectionKey } from "vue"
import ISession from "@/interfaces/ISession"
interface State {
  session: ISession | null
  token: string | null
}
export const key: InjectionKey<Store<State>> = Symbol()
export function customUseStore(): Store<State> {
  return useStore(key)
}

export enum MUTATIONS {
  SAVE_SESSION = 'SAVE_SESSION',
  SAVE_TOKEN = 'SAVE_TOKEN',
  CLEAR_SESSION = 'CLEAR_SESSION'
}

export function getSessionFromStorage(): ISession | null {
  const localSession = localStorage.getItem(process.env.VUE_APP_API_SESSION_KEY)
  if (!localSession) return null
  const s: any = JSON.parse(localSession)
  const session: ISession = {
    id: s.id,
    name: s.name,
    email: s.email,
    created_at: s.created_at,
    type: s.type
  }
  return session
}
export function getTokenFromStorage(): string | null {
  return localStorage.getItem(process.env.VUE_APP_API_TOKEN_KEY)
}

export const store = createStore<State>({
  state: {
    session: getSessionFromStorage(),
    token: getTokenFromStorage()
  },
  mutations: {
    [MUTATIONS.SAVE_SESSION](state, session: ISession) {
      state.session = session
      localStorage.setItem(process.env.VUE_APP_API_SESSION_KEY, JSON.stringify(session))
    },
    [MUTATIONS.SAVE_TOKEN](state, token: string) {
      state.token = token
      localStorage.setItem(process.env.VUE_APP_API_TOKEN_KEY, token)
    },
    [MUTATIONS.CLEAR_SESSION](state) {
      localStorage.removeItem(process.env.VUE_APP_API_SESSION_KEY)
      localStorage.removeItem(process.env.VUE_APP_API_TOKEN_KEY)
      state.session = null
      state.token = null
    },
  },
})
