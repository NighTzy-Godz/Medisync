interface InputErrorProps {
  msg: string;
}

const InputError = ({ msg }: InputErrorProps) => {
  return <p className="text-red-600 text-sm font-sf_med">{msg}</p>;
};

export default InputError;
