# 📱 Generador de Códigos QR

[APP funcionando](https://qr-generador-gilt.vercel.app/ "ir a la APP")

Aplicación full‑stack que permite generar códigos QR a partir de cualquier URL de forma rápida y con una interfaz moderna.

## ✨ Características

- **Frontend moderno** – Construido con React, TypeScript y Tailwind CSS.
- **Modo oscuro** – Cambia automáticamente según la preferencia del sistema.
- **Feedback visual** – Animación de carga, placeholders y alertas con SweetAlert2.
- **Backend sencillo** – API REST con Express que usa la librería `qrcode`.
- **Totalmente responsivo** – Se adapta a cualquier tamaño de pantalla.
- **Listo para producción** – Scripts de build y desarrollo optimizados.

## 🛠️ Tecnologías

### Frontend

| Tecnología                                   | Uso                                   |
| -------------------------------------------- | ------------------------------------- |
| [React 19](https://react.dev)                | Librería de interfaces                |
| [TypeScript](https://www.typescriptlang.org) | Tipado estático                       |
| [Vite](https://vitejs.dev)                   | Empaquetador y servidor de desarrollo |
| [Tailwind CSS 4](https://tailwindcss.com)    | Estilos utilitarios                   |
| [SweetAlert2](https://sweetalert2.github.io) | Ventanas emergentes atractivas        |

### Backend

| Tecnología                                     | Uso                           |
| ---------------------------------------------- | ----------------------------- |
| [Node.js](https://nodejs.org)                  | Entorno de ejecución          |
| [Express 5](https://expressjs.com)             | Servidor HTTP                 |
| [qrcode](https://www.npmjs.com/package/qrcode) | Generación de códigos QR      |
| [Morgan](https://www.npmjs.com/package/morgan) | Logger de peticiones          |
| [CORS](https://www.npmjs.com/package/cors)     | Habilitar peticiones cruzadas |
| [dotenv](https://www.npmjs.com/package/dotenv) | Variables de entorno          |

## 📋 Requisitos previos

- **Node.js** >= 18.x
- **npm** >= 9.x (viene con Node)

## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/RodrDevs80/generador-qr-ts.git
cd generador-qr-ts
```

### 2. Configurar el backend

```bash
cd back-qr-generador
npm install
```

Crea un archivo `.env` (opcional) si deseas cambiar el puerto:

```
PORT=3000
```

Inicia el servidor en modo desarrollo (con reinicio automático):

```bash
npm run dev
```

El backend estará disponible en `http://localhost:3000`.

### 3. Configurar el frontend

Desde la raíz del proyecto:

```bash
cd qr-generador
npm install
npm run dev
```

El frontend se abrirá normalmente en `http://localhost:5173`.

## 🚀 Uso

1. Abre la aplicación en tu navegador.
2. Escribe o pega una URL en el campo de texto (por ejemplo, `https://ejemplo.com`).
3. Haz clic en el botón **Generar QR**.
4. Espera unos instantes mientras se genera la imagen.
5. El código QR aparecerá dentro de una tarjeta. Puedes hacer clic derecho sobre la imagen para descargarla.

Si el campo está vacío, se mostrará una alerta pidiéndote que ingreses una URL.

## 📁 Estructura del proyecto

```
generador-qr-ts/
├── back-qr-generador/          # Backend (API REST)
│   ├── index.js                # Punto de entrada
│   ├── package.json
│   ├── qr/
│   │   ├── qr.controller.js    # Lógica de generación del QR
│   │   └── qr.router.js        # Definición de rutas
│   └── .env (opcional)
│
├── qr-generador/               # Frontend (React + Vite)
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig*.json
│   ├── public/
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── GeneradorQR.tsx     # Componente principal del QR
│       ├── Boton.tsx           # Botón reutilizable
│       ├── index.css           # Estilos base con Tailwind
│       └── App.css             # (vacío, se puede eliminar)
│
├── .gitignore
└── README.md
```

## 📜 Scripts disponibles

### Backend (`back-qr-generador`)

| Comando       | Descripción                                                 |
| ------------- | ----------------------------------------------------------- |
| `npm run dev` | Inicia el servidor con Node `--watch` (reinicio automático) |
| `npm start`   | Inicia el servidor en modo normal                           |

### Frontend (`qr-generador`)

| Comando           | Descripción                                    |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con Vite      |
| `npm run build`   | Compila TypeScript y empaqueta para producción |
| `npm run preview` | Previsualiza la versión de producción          |
| `npm run lint`    | Ejecuta ESLint en el código                    |

## 🌐 Variables de entorno

Solo el backend puede usar variables de entorno (archivo `.env` en `back-qr-generador`):

| Variable | Descripción                              | Valor por defecto |
| -------- | ---------------------------------------- | ----------------- |
| `PORT`   | Puerto donde escucha el servidor Express | `3000`            |

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto:

1. Haz un fork.
2. Crea una rama (`git checkout -b mejora/mi-feature`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Haz push a la rama (`git push origin mejora/mi-feature`).
5. Abre un Pull Request.

## 👤 Autor

Desarrollado con ❤️ por **Carlos Eduardo Rodriguez**

- GitHub: [RodrDevs80](https://github.com/RodrDevs80)
- Repositorio: [generador-qr-ts](https://github.com/RodrDevs80/generador-qr-ts.git)

## 📄 Licencia

Este proyecto está bajo la licencia ISC.
