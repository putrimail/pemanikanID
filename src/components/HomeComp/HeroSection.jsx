import { assets } from "../../assets";

function HeroSection() {
  return (
    <div
      className="relative bg-cover bg-center w-full h-screen bg-no-repeat "
      style={{
        backgroundImage: `url(${assets.bgHero})`,
      }}
    >
      {/* Layer Amber untuk Background Overlay */}
      <div className="absolute inset-0 bg-amber-600 opacity-40 "></div>

      {/* Konten Halaman */}
      <div className="relative isolate px-6 pt-14 lg:px-8 h-full flex flex-col justify-center items-center">
        <div className="mx-auto max-w-2xl py-32 sm:py-45 sm: lg:py-56 rounded-4xl">
          <div className="text-center m-5">
            <h1 className="text-5xl font-semibold tracking-tight text-white  md:text-4xl ">
              Sugeng rawuh ring PemanikanID
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-200 md:text-xl/8 ">
              Adat dan budaya merupakan warisan tak ternilai dari para leluhur
              yang harus dijaga dan dilestarikan dalam kehidupan bermasyarakat,
              berbangsa dan bernegara. Bagi Suku Sasak, warisan bukan hanya
              sekadar bagian dari tradisi dan menjadi indentitas suatu suku,
              tetapi juga mencerminkan nilai-nilai luhur yang diwariskan secara
              turun-temurun. Sehingga, pelestarian adat dan budaya Suku Sasak
              sudah seharusnya menjadi tanggung jawab bersama agar tetap relevan
              dengan perkembangan zaman.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
