import { useContext } from "react"
import { AuthContext } from "../hoc/auth-provider"

const useAuth = () => {
  return useContext(AuthContext)
}
export default useAuth