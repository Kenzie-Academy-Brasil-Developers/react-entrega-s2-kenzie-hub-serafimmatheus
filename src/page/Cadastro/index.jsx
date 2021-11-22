import { HeaderCadastro, DivFormCadastro, DivLogin } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../Services";
import toast from "react-hot-toast";
import { Inputs } from "../../Components/inputs";
import { FiUser, FiLock, FiMail } from "react-icons/fi";
import { Link, useHistory, Redirect } from "react-router-dom";
import { Buttons } from "../../Components/Buttons";

export const Cadastro = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório.")
      .matches(/^[aA-zZ\s]+$/, "Apenas letras"),
    email: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        "^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
        "E-mail inválido"
      ),
    password: yup
      .string()
      .min(6, "Minimo 6 caracters")
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
        "Senha deve conter numeros, letras, uma letra MAIÚSCULA e um caracter especial ex:(!@#$%&*)."
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não compatível.")
      .required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormCadastro = ({
    email,
    password,
    name,
    bio,
    contact,
    course_module,
  }) => {
    const users = { email, password, name, bio, contact, course_module };
    api
      .post("/users/", users)
      .then((response) => {
        history.push("/");
        toast.success("Usuário cadastrado");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! Falha no cadastro");
      });
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <HeaderCadastro>
      <div>
        <h1>
          Kenzie <span>Hub</span>
        </h1>
      </div>

      <DivFormCadastro>
        <form onSubmit={handleSubmit(handleFormCadastro)}>
          {errors.name?.message}
          <Inputs
            icon={FiUser}
            type="text"
            placeholder="Nome completo"
            register={register}
            name="name"
          />

          {errors.email?.message}
          <Inputs
            icon={FiMail}
            type="text"
            placeholder="Email"
            register={register}
            name="email"
          />

          {errors.bio?.message}
          <Inputs
            icon={FiMail}
            type="text"
            placeholder="Algo sobre você"
            register={register}
            name="bio"
          />

          {errors.contact?.message}
          <Inputs
            icon={FiMail}
            type="text"
            placeholder="Contato"
            register={register}
            name="contact"
          />

          {errors.course_module?.message}
          <select {...register("course_module")}>
            <option selected disabled value="modulo">
              Selecione o modulo
            </option>
            <option value="primeiro">Primeiro</option>
            <option value="segundo">Segundo</option>
            <option value="terceiro">Terceiro</option>
            <option value="quarto">Quarto</option>
          </select>

          {errors.password?.message}
          <Inputs
            icon={FiLock}
            type="password"
            placeholder="Senha"
            register={register}
            name="password"
          />

          {errors.confirm_password?.message}
          <Inputs
            icon={FiLock}
            type="password"
            placeholder="Confirmação de senha"
            register={register}
            name="confirm_password"
          />

          <Buttons type="submit">Cadastrar</Buttons>

          <DivLogin>
            <p>
              Já tem um cadastro?
              <span>
                <Link className="link" to="/">
                  {" "}
                  Login
                </Link>
              </span>
            </p>
          </DivLogin>
        </form>
      </DivFormCadastro>
    </HeaderCadastro>
  );
};
