import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import api from '@/Api/backend_sneakers'
import { SneakersType } from '@/Typing/Sneakers.type'

export const fetchAllSneaker = async () => {
  const { data } = await api.get<SneakersType[]>('/sneakers/all')
  return data
}
export const fetchByNameSneaker = async (ctx: QueryFunctionContext) => {
  const [_,name]=ctx.queryKey
  const { data } = await api.get<SneakersType[]>(`sneakers?name=${name}`)
  return data
}

export const useFetchAllSneaker = () => useQuery(['sneakers'], fetchAllSneaker)
export const useFetchByNameSneaker = (name:string) => useQuery(['sneakersByName',name], fetchByNameSneaker)

