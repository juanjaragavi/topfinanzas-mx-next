


export function Hero() {
    return (
        <section
            className="relative w-full bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('https://media.topfinanzas.com/images/bannerppal-1536x400-1.webp')",
                height: '400px', // Matches the image explicit height for "exact match" of banner dimensions often found in WP themes
            }}
        >
            {/* Overlay if needed for text readability, but WP sites often just paste text on top. 
            I'll stick to a clean container alignment. 
            The image name implies 1536x400. 
        */}
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                <div className="max-w-3xl text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 drop-shadow-md leading-tight">
                        Bienvenidos a Top Finanzas
                    </h1>
                    <p className="text-xl md:text-2xl font-medium drop-shadow-md leading-relaxed">
                        Donde cada decisión financiera amplía tu mundo. <br className="hidden md:block" />
                        Decide sabiamente, vive plenamente.
                    </p>
                </div>
            </div>
        </section>
    );
}
