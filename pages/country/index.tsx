import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Map = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

export default function Inicio() {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <>
      {isBrowser && <Map />}
    </>
  );
}