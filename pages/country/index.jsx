import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import universities from '../../data/unik.json';

const Map = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

export default function Inicio({ universities }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <>
      {isBrowser && <Map universities={universities} />}
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      universities,
    },
  };
}