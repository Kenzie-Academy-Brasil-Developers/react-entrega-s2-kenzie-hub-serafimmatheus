import { AsideUser, ContactUser } from "./style";
import { FiSmartphone, FiMail } from "react-icons/fi";
import { Buttons } from "../Buttons";
import { useHistory, Redirect } from "react-router-dom";

export const CardUser = ({ userTech, authenticated, setAuthenticated }) => {
  const history = useHistory();
  const Logout = () => {
    localStorage.clear();
    setAuthenticated(false);
  };

  if (!authenticated) {
    <Redirect to="/login" />;
  }

  return (
    <>
      <AsideUser>
        <div className="box-user">
          <figure>
            <img
              src={
                userTech.avatar_url
                  ? userTech.avatar_url
                  : "https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png"
              }
              alt={userTech.user.name}
            />
          </figure>

          <div>
            <h2>{userTech.user.name}</h2>
            <p>{userTech.user.course_module} módulo</p>
          </div>
        </div>

        <ContactUser>
          <ul>
            <li Colorprimary>
              <div className="img-contato">
                <FiSmartphone />
              </div>
              <p>
                Ligar agora <br />
                {userTech.user.contact}
              </p>
            </li>

            <li>
              <div className="img-email">
                <FiMail />
              </div>
              <p>
                Enviar email <br />
                {userTech.user.email}
              </p>
            </li>
          </ul>
        </ContactUser>
        <Buttons onClick={Logout}>sair</Buttons>
      </AsideUser>
    </>
  );
};
