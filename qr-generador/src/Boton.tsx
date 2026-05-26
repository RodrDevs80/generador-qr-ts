const Boton = ({ onClick }: { onClick: () => void }) => {
    return (
        <button
            onClick={onClick}
            className="
        px-6 py-3 
        bg-purple-600 hover:bg-purple-700 active:bg-purple-800
        text-white font-semibold rounded-xl 
        shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40
        transition-all duration-200 
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
        dark:bg-purple-500 dark:hover:bg-purple-600 dark:shadow-purple-400/30
      "
        >
            Generar QR
        </button>
    );
};

export default Boton;