import { ModalWork } from "./style";
import { FiX } from "react-icons/fi";
import { Buttons } from "../Buttons";

export const ModalsWorks = ({
  handleWorks,
  isModal,
  setIsModal,
  register,
  title,
  description,
}) => {
  return (
    <ModalWork isModal={isModal}>
      <div>
        <div className="new-tec">
          <h2>Cadastrar Trabalho</h2>
          <p onClick={() => setIsModal(false)}>
            <FiX />
          </p>
        </div>

        <form onSubmit={handleWorks}>
          <input
            type="text"
            placeholder="Nome do Trabalho"
            {...register(title)}
          />
          <textarea
            {...register(description)}
            placeholder="Descrição do trabalho"
            maxlength="255"
          ></textarea>
          <Buttons onClick={() => setIsModal(false)} type="submit">
            Cadastrar
          </Buttons>
        </form>
      </div>
    </ModalWork>
  );
};
