import React from 'react';
import { FaPlay, FaMicrophone, FaMusic, FaBroadcastTower } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-between text-white overflow-x-hidden font-sans">
            {/* Dynamic Background */}
            <div
                className="fixed inset-0 bg-cover bg-center z-0 scale-105"
                style={{ backgroundImage: 'url(/bgdoeagle.png)' }}
            />
            <div className="fixed inset-0 bg-gradient-to-br from-black/90 via-blue-900/60 to-black/80 z-0" />

            {/* Navbar / Header */}
            <header className="relative z-10 w-full p-6 flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center gap-3">
                    <img src="/doeagle.jpeg" alt="Logo" className="w-12 h-12 rounded-full shadow-lg border-2 border-white/20" />
                    <span className="text-xl font-bold tracking-wider">DO EAGLE</span>
                </div>

                <nav className="hidden md:flex gap-8 text-sm font-medium text-white/80">
                    <a href="#" className="hover:text-white transition-colors">Inicio</a>
                    <a href="#about" className="hover:text-white transition-colors">Nosotros</a>
                    <a href="https://doeagleradio.com" className="hover:text-white transition-colors">Noticias</a>
                </nav>

                <Link
                    to="/"
                    className="glass-button px-6 py-2 rounded-full text-sm font-bold bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                >
                    Escuchar En Vivo
                </Link>
            </header>

            {/* Hero Section */}
            <main className="relative z-10 flex flex-col items-center text-center px-4 mt-12 mb-20 max-w-4xl mx-auto animate-fade-in-up">
                <span className="text-blue-400 font-bold tracking-[0.2em] text-sm mb-4 uppercase">La Estación del Amor</span>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
                    Siente la <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Música</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed">
                    Conéctate con las mejores melodías románticas, noticias y entretenimiento las 24 horas del día. Do Eagle Radio, tu compañía perfecta.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        to="/"
                        className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] transition-all flex items-center gap-3"
                    >
                        <FaPlay className="text-sm" />
                        <span>Escuchar Ahora</span>
                    </Link>
                    <a
                        href="#more"
                        className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold text-lg border border-white/10 backdrop-blur-md transition-all"
                    >
                        Saber Más
                    </a>
                </div>
            </main>

            {/* Features Grid */}
            <section className="relative z-10 w-full bg-black/40 backdrop-blur-sm py-16 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="glass-panel p-8 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-300 text-2xl">
                            <FaMusic />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Música Sin Fin</h3>
                        <p className="text-white/60">Una selección curada de los mejores éxitos románticos para acompañar cada momento de tu día.</p>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-300 text-2xl">
                            <FaMicrophone />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Locutores en Vivo</h3>
                        <p className="text-white/60">Voces profesionales que traen alegría, información y entretenimiento directamente a tus oídos.</p>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-300 text-2xl">
                            <FaBroadcastTower />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Calidad HD</h3>
                        <p className="text-white/60">Disfruta de una transmisión de alta fidelidad, clara y sin interrupciones donde quiera que estés.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 w-full py-8 text-center text-white/30 text-sm border-t border-white/5 bg-black/60">
                <p>&copy; {new Date().getFullYear()} Do Eagle Radio. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
