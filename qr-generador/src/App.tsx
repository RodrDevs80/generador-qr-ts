import { useState } from 'react';
import QRComponent from './GeneradorQR';

function App() {
  const [url, setUrl] = useState('');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
            Generador de QR
          </h1>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
            Pega una URL, genera y descarga tu código QR al instante.
          </p>
        </div>

        {/* Input + componente QR */}
        <div className="flex flex-col items-center gap-6">
          <input
            type="text"
            placeholder="https://ejemplo.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="
              w-full max-w-md 
              px-5 py-3 
              text-base 
              bg-white dark:bg-gray-800 
              border border-gray-300 dark:border-gray-600 
              rounded-xl 
              shadow-sm 
              placeholder-gray-400 dark:placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 
              transition-all duration-200
            "
          />

          <QRComponent text={url} />
        </div>

        <p className="text-center text-sm text-gray-400 dark:text-gray-600 mt-12">
          Hecho con ❤️ y React
          <br />
          <a href="https://github.com/RodrDevs80/generador-qr-ts.git" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
            Ver en GitHub - Desarrollado por: Carlos Eduardo Rodriguez
          </a>
        </p>
      </div>
    </div>
  )
}

export default App;