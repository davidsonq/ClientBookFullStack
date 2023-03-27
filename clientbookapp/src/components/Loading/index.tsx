import { useProvider } from "@/contexts/authContext";
import { TailSpin } from "react-loader-spinner";
export default function Loading() {
  const { loading } = useProvider();
  return (
    <>
      {loading && (
        <TailSpin
          height="25"
          width="25"
          color="#295f28"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
    </>
  );
}
