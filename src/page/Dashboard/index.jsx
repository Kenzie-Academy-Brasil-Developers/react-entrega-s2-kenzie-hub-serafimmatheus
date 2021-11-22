import { Redirect } from "react-router-dom";
import { HeaderDash, MainDash, Modal } from "./style";
import { useState, useEffect } from "react";
import { Buttons } from "../../Components/Buttons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../Services";
import toast from "react-hot-toast";
import { CadastroTecs } from "../../Components/CadastroTecs/index";
import { ModalsTecs } from "../../Components/ModalTecs";
import { CadastroWorks } from "../../Components/CadastroWorks/index";
import { CardUser } from "../../Components/CardUser/index";
import { Container } from "../../Styles/Container";

export const Dashboard = ({ authenticated, setAuthenticated }) => {
  const [isModal, setIsModal] = useState(false);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const [userTech] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:user")) || ""
  );

  const [listaTechs, setListTechs] = useState([]);

  const schema = yup.object().shape({
    title: yup.string(),
    status: yup.string(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const listTecs = () => {
    if (userTech) {
      const id = userTech.user.id;
      api.get(`/users/${id}`).then((response) => {
        setListTechs(response.data.techs);
      });
    }
  };

  useEffect(() => {
    listTecs();
  }, []);

  const handleNewTech = ({ title, status }) => {
    console.log(title, status);
    api
      .post(
        "/users/techs/",
        {
          title: title,
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        toast.success("Tecnologia adicionada");
        listTecs();
      })
      .catch((err) => {
        toast.error("Falha ao cadastrar");
      });
  };

  if (!authenticated) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <>
        <ModalsTecs
          onSubmit={handleSubmit(handleNewTech)}
          onClick={() => setIsModal(false)}
          isModal={isModal}
          register={register}
          name="Cadastrar tecnologia"
        />
      </>

      <HeaderDash>
        <div>
          <h1>
            Kenzie <span>Hub</span>
          </h1>
        </div>

        <figure>
          <img
            src="https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png"
            alt="Foto do Dev"
          />
        </figure>
      </HeaderDash>

      <MainDash>
        <CadastroTecs
          isModal={isModal}
          setIsModal={setIsModal}
          listaTechs={listaTechs}
          setListTechs={setListTechs}
          token={token}
        />

        <CadastroWorks
          token={token}
          userTech={userTech}
          name="Meus Trabalhos"
        />

        <CardUser
          authenticated={authenticated}
          userTech={userTech}
          setAuthenticated={setAuthenticated}
        />
      </MainDash>
    </>
  );
};
