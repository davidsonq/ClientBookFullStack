import HeadComponent from "@/components/Head";
import Header from "@/components/Header";
import { useProvider } from "@/contexts/authContext";

export default function Dashbord() {
  return (
    <>
      <HeadComponent />
      <Header />
      <main></main>
    </>
  );
}
