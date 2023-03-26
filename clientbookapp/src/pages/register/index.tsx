import FormRegister from "@/components/FormRegister";
import HeadComponent from "@/components/Head";
import { Main } from "@/styles/MainLogin";

export default function Register() {
  return (
    <>
      <HeadComponent />
      <Main>
        <FormRegister />
      </Main>
    </>
  );
}
