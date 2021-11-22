import { SectionTecs } from "./style";
import { FiPlusSquare } from "react-icons/fi";
import imgAllBox from "../../Assets/codesandbox.png";
import { api } from "../../Services";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export const CadastroTecs = ({
  token,
  isModal,
  setIsModal,
  listaTechs,
  setListTechs,
}) => {
  const deleteTecs = (id) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const filtered = listaTechs.filter((elem) => elem.id !== id);

        toast.success("Tecnologia removida");
        setListTechs(filtered);
      });
  };

  useEffect(() => {
    deleteTecs();
  }, []);

  return (
    <SectionTecs>
      <div>
        <h2>Minhas Tecnologias</h2>
        <p className="p" onClick={() => setIsModal(true)}>
          <FiPlusSquare />
        </p>
      </div>

      <ul>
        {listaTechs.map((elem) => (
          <li key={elem.id}>
            <button onClick={() => deleteTecs(elem.id)}>x</button>
            <figure>
              <img src={`${imgAllBox}`} alt="Img tec" />
            </figure>

            <div>
              <h4>{elem.title}</h4>
              <p>{elem.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </SectionTecs>
  );
};
