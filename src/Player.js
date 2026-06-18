import React, { useState, useEffect } from 'react';
import { FaDownload, FaBars, FaTimes, FaGlobe, FaInfoCircle, FaHome } from 'react-icons/fa';

const Player = () => {
    const [currentSong, setCurrentSong] = useState({
        title: 'Cargando...',
        artist: 'Do Eagle',
        image: '/doeagle.jpeg',
    });
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const fetchCurrentSong = async () => {
            try {
                const response = await fetch(
                    'https://cast5.asurahosting.com/rpc/losarad3/streaminfo.get'
                );
                const data = await response.json();
                const trackData = data.data[0].track;

                setCurrentSong({
                    title: trackData.title || 'Desconocido',
                    artist: trackData.artist || 'Do Eagle',
                    image: '/doeagle.jpeg',
                });
            } catch (error) {
                console.error('Error fetching current song:', error);
            }
        };

        fetchCurrentSong();
        const interval = setInterval(fetchCurrentSong, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const beforeInstallPromptHandler = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };

        window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);
        window.addEventListener('appinstalled', () => {
            setIsInstalled(true);
            setDeferredPrompt(null);
        });

        return () => {
            window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
        };
    }, []);

    useEffect(() => {
        document.title = `${currentSong.title} - ${currentSong.artist}`;
    }, [currentSong]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//cdn.cloud.caster.fm/widgets/embed.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleInstallClick = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                setIsInstalled(true);
                setDeferredPrompt(null);
            }
        }
    };

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0 scale-110 blur-sm brightness-75 transition-all duration-1000"
                style={{ backgroundImage: 'url(/bgdoeagle.png)' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-0"></div>

            {/* Menu Button */}
            <button
                className="absolute top-6 left-6 z-50 p-2 text-white/90 hover:text-white transition-colors"
                onClick={() => setMenuOpen(true)}
            >
                <FaBars className="text-2xl" />
            </button>

            {/* Full Screen Menu */}
            <div className={`fixed inset-0 z-50 bg-black/90 backdrop-blur-xl transition-opacity duration-300 flex flex-col items-center justify-center ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <button
                    className="absolute top-6 right-6 p-2 text-white/90 hover:text-white transition-colors"
                    onClick={() => setMenuOpen(false)}
                >
                    <FaTimes className="text-3xl" />
                </button>

                <div className="flex flex-col gap-8 text-center bg-white/5 p-12 rounded-3xl border border-white/10 shadow-2xl">
                    <h2 className="text-3xl font-bold text-white mb-4">Menú</h2>

                    <button
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-4 text-xl text-white/80 hover:text-white hover:scale-105 transition-all text-left w-full pl-8"
                    >
                        <FaHome className="text-pink-500" /> Inicio
                    </button>

                    <div className="flex items-center gap-4 text-xl text-white/80 transition-all text-left w-full pl-8">
                        <FaInfoCircle className="text-blue-400" />
                        <div>
                            <span className="block font-semibold">Sobre la Estación</span>
                            <span className="text-sm text-white/50 block">Do Eagle - La más Romantica</span>
                        </div>
                    </div>

                    <a
                        href="https:doeagleradio.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-xl text-white/80 hover:text-white hover:scale-105 transition-all text-left w-full pl-8"
                    >
                        <FaGlobe className="text-green-400" /> Noticias / Sitio Web
                    </a>
                </div>
            </div>

            {/* Main Glass Card */}
            <div className="relative z-10 w-full max-w-md p-8 glass-panel rounded-3xl flex flex-col items-center text-center mx-4 animate-fade-in-up">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-white/90">Do Eagle</h1>
                    <p className="text-white/60 text-sm font-medium uppercase tracking-widest mt-1">La más Romantica</p>
                </div>

                {/* Album Art */}
                <div className="relative group mb-8">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/30 transition-all duration-500"></div>
                    <img
                        src={currentSong.image}
                        alt="Album Art"
                        className="relative w-48 h-48 rounded-2xl shadow-2xl object-cover transition-transform duration-700"
                    />
                </div>

                {/* Song Info */}
                <div className="mb-10 w-full">
                    <h2 className="text-2xl font-bold text-white mb-2 truncate drop-shadow-md">{currentSong.title}</h2>
                    <p className="text-lg text-white/70 font-medium truncate">{currentSong.artist}</p>
                </div>

                {/* Controls */}
                <div className="mb-8 w-full">
                    <div
                        className="cstrEmbed"
                        data-type="newStreamPlayer"
                        data-publicToken="772dad0e-231b-43c0-ac62-621c1d76c5e8"
                        data-theme="dark"
                        data-color="e81e4d"
                        data-channelId="a20c9510-5017-42fd-a881-d896f0d80b6a"
                        data-rendered="false"
                    />
                </div>

                {/* Install Button (Conditional) */}
                {!isInstalled && deferredPrompt && (
                    <button
                        className="group glass-button px-6 py-3 rounded-xl flex items-center gap-3 text-sm font-bold text-white/90"
                        onClick={handleInstallClick}
                    >
                        <FaDownload className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                        <span>Instalar App</span>
                    </button>
                )}
            </div>

            {/* Footer / Branding */}
            <div className="absolute bottom-6 text-white/30 text-xs font-light z-10 w-full text-center">
                Streaming Powered by Do Eagle x Dairon Amador
            </div>
        </div>
    );
};

export default Player;
