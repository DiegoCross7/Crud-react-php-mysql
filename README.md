# CRUD React + PHP + MySQL

[![Version](https://img.shields.io/badge/version-1.0.0-brightgreen)]() [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## ✨ Descripción

Proyecto de demostración de un sistema **CRUD** (Crear, Leer, Actualizar, Eliminar) implementado con **React** en el frontend, **PHP** en el backend y **MySQL** como base de datos. Ideal para aprender la integración entre estas tecnologías y aplicar en tus propios proyectos.
LINK SUBIDO A HOST :
https://960439320.senati.chat.pe/dist/

## 🚀 Tecnologías

- 🖥️ **Frontend:** React (Hooks, React Router)  
- ⚙️ **Backend:** PHP 7+ (PDO, enrutamiento simple)  
- 🗄️ **Base de datos:** MySQL  
- 📦 **Gestión de dependencias:** npm, Composer  
- 📄 **Estilos:** CSS modular / Flexbox / Grid  

## 📁 Estructura del proyecto

```bash
Crud-react-php-mysql/
├─ frontend/                # Código React (create-react-app)
│  ├─ public/               # Archivos estáticos
│  └─ src/                  # Componentes, rutas, servicios API
├─ backend/                 # Código PHP
│  ├─ config/               # Configuración y conexión a BD
│  ├─ controllers/          # Lógica de negocio
│  └─ public/               # Punto de entrada (index.php)
└─ database/
   └─ migrations/           # Scripts de creación de tablas y datos de ejemplo
```

## 🔧 Instalación

Instalar axios, para mejorar las solicitudes HTTP a la API
```bash
npm i axios
```

Instalar la librería react-toastify para crear las alertas.
```bash
npm install --save react-toastify
```

Para correr el proyecto, solo basta instalar las dependencias y correr el proyecto
```bash
npm install
npm run dev
```

## 🏃 Uso

Desde la interfaz puedes:
- ➕ **Crear** nuevos registros
- 🔍 **Leer** la lista de registros
- ✏️ **Actualizar** datos existentes
- 🗑️ **Eliminar** registros

## ⚙️ Variables de entorno

Renombra `.env.example` a `.env` y ajusta:

```ini
DB_HOST=localhost
DB_NAME=crud_react_php_mysql
DB_USER=tu_usuario
DB_PASS=tu_contraseña
API_URL=http://localhost:8000
```

## 📑 Contribuciones

¡Contribuciones bienvenidas! Sigue estos pasos:

1. Haz fork del repositorio
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y commitea (`git commit -m "Agrega nueva característica"`)
4. Envía un pull request  

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---

## 👤 Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/DiegoCross7">
        <img src="https://avatars.githubusercontent.com/DiegoCross7" width="80px" alt="" />
        <br />
        <sub><b>DiegoCross7</b></sub>
      </a>
    </td>
  </tr>
</table>

> ¡Gracias por visitar y aportar! 🌟

