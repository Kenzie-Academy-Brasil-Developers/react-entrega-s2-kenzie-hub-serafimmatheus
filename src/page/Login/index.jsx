import { HeaderLogin, DivForm, DivCadastro } from "./style";
import { Inputs } from "../../Components/inputs";
import { FiUser, FiLock } from "react-icons/fi";
import { Buttons } from "../../Components/Buttons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../Services/index";
import toast from "react-hot-toast";
import { Link, useHistory, Redirect } from "react-router-dom";

export const Login = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormLogin = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(response.data));
        toast.success("Login efetuado com sucesso");
        setAuthenticated(true);
        history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Login/Senha inválido");
      });
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <HeaderLogin>
      <div>
        <h1>
          Kenzie <span>Hub</span>
        </h1>
      </div>

      <DivForm>
        <form onSubmit={handleSubmit(handleFormLogin)}>
          {errors.email?.message}
          <Inputs
            icon={FiUser}
            type="text"
            placeholder="Login"
            register={register}
            name="email"
          />
          {errors.password?.message}

          <Inputs
            icon={FiLock}
            type="password"
            placeholder="Senha"
            register={register}
            name="password"
          />
          <span>
            Criar uma Página para mostar suas
            <br />
            habilidades metas e progresso
          </span>
          <Buttons type="submit">Logar</Buttons>

          <DivCadastro>
            <p>
              Não tem um cadastro?
              <span>
                <Link className="link" to="/cadastro">
                  {" "}
                  CADASTRE-SE
                </Link>
              </span>
            </p>
          </DivCadastro>
        </form>
      </DivForm>
    </HeaderLogin>
  );
};
