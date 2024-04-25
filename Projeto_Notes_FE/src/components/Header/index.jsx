import {api} from "../../services/api"
import {RiShutDownLine} from 'react-icons/ri'
import {useAuth} from '../../hooks/auth'
import { Container, Profile, Logout } from "./styles";
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header() {
  const {signOut, user} = useAuth();
  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/")
    signOut()
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <Container>
      <Profile to="/Profile">
        <img 
          src={avatarUrl}
          alt= "Foto do usuário"
          />
          <div>
            <span>Bem-vindo</span>
            <strong>{user.name}</strong>
          </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine/>
      </Logout>

    </Container>
  )
}