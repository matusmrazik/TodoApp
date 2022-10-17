import { generatePath } from 'react-router-dom'
import { DETAIL_PAGE } from './constants'
import { DetailPageParams } from './types'

export const createDetailPageUrl = (id: string) => {
  const params: DetailPageParams = { id }
  return generatePath(DETAIL_PAGE, params)
}
