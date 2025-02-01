import { useEffect, useRef, useState } from "react";
import { musikPlaying } from "../middlewares/musciPlay";
import { FaRegCirclePlay, FaPause, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Mp3 from "../Music/mirah-sasak.mp3";
function ButtonSideBarComp() {
  const [mulai, setMulai] = useState(false);
  const audioRef = useRef(new Audio(Mp3));
  useEffect(() => {
    musikPlaying(audioRef.current, mulai);

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, [mulai]);
  return (
    <div className="flex items-center justify-end  ">
      <div className="fixed bottom-10 bg-gray-500 py-10 px-3 m-3 opacity-65 rounded-4xl ">
        <div
          onClick={() => setMulai(!mulai)}
          className=" cursor-pointer rounded-full  text-white bg-amber-600   text-sm hover:bg-gray-400   md:px-4.5 md:py-3.5 md:text-lg"
        >
          {mulai ? <FaPause /> : <FaRegCirclePlay />}
        </div>
        <Link to="https://wa.me/6287817638249?text=Halo,%20saya%20ingin%20memberi%20masukan">
          <div className=" cursor-pointer rounded-full mt-5  text-white bg-emerald-600  text-sm hover:bg-gray-400  md:px-4.5 md:py-3.5 md:text-lg">
            <FaWhatsapp />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ButtonSideBarComp;
