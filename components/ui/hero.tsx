export function Hero() {
  return (
    <section
      className="relative w-full bg-[#015ECC] md:bg-[url('https://media.topfinanzas.com/images/bannerppal-1536x400-1.webp')] bg-cover bg-center bg-no-repeat"
      style={{
        height: "400px",
      }}
    >
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-white text-4xl md:text-5xl lg:text-5xl font-bold mb-4 drop-shadow-md leading-tight">
            Bienvenidos a<br className="block" /> Top Finanzas
          </h1>
          <p className="text-white text-xl md:text-2xl font-medium drop-shadow-md leading-relaxed">
            Donde cada decisión financiera amplía tu mundo.{" "}
            <br className="hidden md:block" />
            Decide sabiamente, vive plenamente.
          </p>
        </div>
      </div>
    </section>
  );
}
