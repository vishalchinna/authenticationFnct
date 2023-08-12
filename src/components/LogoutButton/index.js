import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onClickLogoutButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button type="button" onClick={onClickLogoutButton}>
      Logout
    </button>
  )
}
export default withRouter(LogoutButton)
