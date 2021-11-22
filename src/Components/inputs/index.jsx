import { DivFormStyled } from "./style";

export const Inputs = ({ register, name, icon: Icon, ...rest }) => {
  return (
    <DivFormStyled>
      <div>
        <Icon />
      </div>

      <input {...register(name)} {...rest} />
    </DivFormStyled>
  );
};
