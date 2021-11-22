import { Modal } from "./style";
import { FiX } from "react-icons/fi";
import { Buttons } from "../Buttons";

export const ModalsTecs = ({ onSubmit, isModal, onClick, register, name }) => {
  return (
    <Modal isModal={isModal}>
      <div>
        <div className="new-tec">
          <h2>{name}</h2>
          <p onClick={onClick}>
            <FiX />
          </p>
        </div>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Nome da Tech"
            {...register("title")}
          />
          <select {...register("status")}>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </select>
          <Buttons type="submit" onClick={onClick}>
            Cadastrar
          </Buttons>
        </form>
      </div>
    </Modal>
  );
};
