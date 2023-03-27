import { useProvider } from "@/contexts/authContext";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Button } from "./style";

export const ButtonEye = () => {
  const { useEye, setUseEye } = useProvider();

  const handleTypeEye = () =>
    useEye === "password" ? setUseEye("text") : setUseEye("password");

  return (
    <Button onClick={handleTypeEye} type="button">
      {useEye === "password" ? <AiFillEye /> : <AiFillEyeInvisible />}
    </Button>
  );
};
