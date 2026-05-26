import { useState } from 'react';
import Boton from './Boton';
import Swal from 'sweetalert2';

const QRComponent = ({ text }: { text: string }) => {
    const [qrSrc, setQrSrc] = useState<string | null>(null);
    const [cargando, setCargando] = useState(false);

    const funcgenerarQR = async () => {
        if (!text || text.trim() === '') {
            Swal.fire({
                title: 'Error',
                text: 'Ingrese una URL',
                icon: 'error',
            });
            return;
        }

        setCargando(true);
        try {
            const res = await fetch('http://localhost:3000/api/qr/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text }),
            });
            const data = await res.text();
            setQrSrc(data);
        } catch {
            setQrSrc(null);
            Swal.fire({
                title: 'Error',
                text: 'No se pudo generar el QR',
                icon: 'error',
            });
        } finally {
            setCargando(false);
        }
    };

    return (
        <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto mt-8">
            <Boton onClick={funcgenerarQR} />

            {/* Estado de carga */}
            {cargando && (
                <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <div className="w-6 h-6 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
                    <span>Generando QR...</span>
                </div>
            )}

            {/* Imagen del QR */}
            {qrSrc && !cargando && (
                <div className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg shadow-gray-200/70 dark:shadow-gray-900/50 p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300">
                    <img
                        src={qrSrc}
                        alt="Código QR generado"
                        className="w-full h-auto max-w-[300px] mx-auto object-contain"
                    />
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center break-all">
                        {text}
                    </p>
                </div>
            )}

            {/* Placeholder cuando no hay QR ni carga */}
            {!qrSrc && !cargando && (
                <div className="w-full max-w-[300px] aspect-square bg-gray-100 dark:bg-gray-800 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
                    <p className="text-gray-400 dark:text-gray-500 text-center px-4">
                        El código QR aparecerá aquí
                    </p>
                </div>
            )}
        </div>
    );
};

export default QRComponent;