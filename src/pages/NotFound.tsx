import { HOME_PAGE } from '../features/routing/constants'

const NotFound = () => (
  <>
    <div>Oops, this is not a valid page.</div>
    <div>
      Go to <a href={HOME_PAGE}>home page</a>.
    </div>
  </>
)

export default NotFound
