import { SectionWorks } from "./style";
import { FiPlusSquare } from "react-icons/fi";
import imgAllBox from "../../Assets/git-pull-request.png";
import { api } from "../../Services";
import { ModalsWorks } from "../ModalWorks";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const CadastroWorks = ({ name, token, userTech }) => {
  const [isModal, setIsModal] = useState(false);
  const [renderWorks, setRenderWorks] = useState([]);

  const schema = yup.object().shape({
    title: yup.string(),
    description: yup.string(),
    deploy_url: yup.string(),
  });

  const deleteWorks = (id) => {
    api
      .delete(`/users/works/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const filtersWorks = renderWorks.filter((elem) => elem.id !== id);
        setRenderWorks(filtersWorks);
        toast.success("Tecnologia removida");
      });
  };

  const handleWorks = ({ title, description, deploy_url }) => {
    api
      .post(
        "/users/works",
        {
          title: title,
          description: description,
          deploy_url: "none",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        toast.success("Trabalgo cadastrado");
        listaWorks();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Falha ao cadastrar");
      });
  };

  const listaWorks = () => {
    const id = userTech.user.id;
    api
      .get(`/users/${id}`)
      .then((response) => {
        console.log(response.data);
        setRenderWorks(response.data.works);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    listaWorks();
    deleteWorks();
  }, []);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <>
      <ModalsWorks
        isModal={isModal}
        setIsModal={setIsModal}
        handleWorks={handleSubmit(handleWorks)}
        title="title"
        description="description"
        register={register}
      />

      <SectionWorks>
        <div>
          <h2>{name}</h2>
          <p className="pp" onClick={() => setIsModal(true)}>
            <FiPlusSquare />
          </p>
        </div>

        <ul>
          {renderWorks.map((elem) => (
            <li key={elem.id}>
              <button onClick={() => deleteWorks(elem.id)}>x</button>
              <figure>
                <img src={`${imgAllBox}`} alt="Img tec" />
              </figure>

              <div>
                <h4>{elem.title}</h4>
                <p>
                  {elem.description.length > 70
                    ? elem.description.substr(0, 70) + "..."
                    : elem.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </SectionWorks>
    </>
  );
};

/*

*/
