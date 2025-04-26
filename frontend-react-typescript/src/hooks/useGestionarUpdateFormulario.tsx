import { useRef } from "react";
import axios from "axios";
import { toast } from "../toastUtils";
import { Empleado } from "../components/interfaces";

const useGestionarUpdateFormulario = (
  URL_API: string,
  empleados: Empleado[],
  setEmpleados: React.Dispatch<React.SetStateAction<Empleado[]>>,
  setShowEditarEmpl: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const idUpdateRef = useRef<HTMLInputElement>(null);
  const nombreUpdateRef = useRef<HTMLInputElement>(null);
  const cedulaUpdateRef = useRef<HTMLInputElement>(null);
  const edadUpdateRef = useRef<HTMLSelectElement>(null);
  const sexoUpdateRef = useRef<HTMLSelectElement>(null); // Cambiado a HTMLSelectElement
  const telefonoUpdateRef = useRef<HTMLInputElement>(null);
  const cargoUpdateRef = useRef<HTMLSelectElement>(null);
  const avatarUpdateRef = useRef<HTMLInputElement>(null);

  const handleSubmitUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !nombreUpdateRef.current ||
      !cedulaUpdateRef.current ||
      !edadUpdateRef.current ||
      !sexoUpdateRef.current || // Ahora es compatible con <select>
      !telefonoUpdateRef.current ||
      !cargoUpdateRef.current ||
      !avatarUpdateRef.current ||
      !avatarUpdateRef.current.files
    ) {
      console.error("Alguno de los campos no está definido correctamente.");
      return;
    }

    const formData = {
      id: idUpdateRef.current?.value ? parseInt(idUpdateRef.current.value) : 0,
      nombre: nombreUpdateRef.current.value,
      cedula: cedulaUpdateRef.current.value,
      edad: parseInt(edadUpdateRef.current.value),
      sexo: sexoUpdateRef.current.value, // Compatible con <select>
      telefono: telefonoUpdateRef.current.value,
      cargo: cargoUpdateRef.current.value,
      avatar: avatarUpdateRef.current.files[0],
    };
    console.log(formData);
    const id = formData.id;

    try {
      const response = await axios.post<Empleado>(`${URL_API}${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Empleado actualizado correctamente.");

      // Accediendo al empleado actualizado desde la respuesta
      const ultimoEmpleado = response.data;

      // Actualizar la fila correspondiente en la lista de empleados
      const nuevosEmpleados = empleados.map((empleado) => {
        if (empleado.id === ultimoEmpleado.id) {
          // Si el empleado existe en la lista, actualiza sus datos
          return ultimoEmpleado;
        }
        return empleado; // Si no, simplemente devuelve el empleado sin cambios
      });

      setEmpleados(nuevosEmpleados);
      setShowEditarEmpl(false);

      limpiarFormulario();
    } catch (error) {
      console.error("Error al agregar empleado:", error);
    }
  };

  const limpiarFormulario = () => {
    if (
      !idUpdateRef.current ||
      !nombreUpdateRef.current ||
      !cedulaUpdateRef.current ||
      !edadUpdateRef.current ||
      !sexoUpdateRef.current || // Compatible con <select>
      !telefonoUpdateRef.current ||
      !cargoUpdateRef.current ||
      !avatarUpdateRef.current
    ) {
      console.error("Alguno de los campos no está definido correctamente.");
      return;
    }

    idUpdateRef.current.value = "";
    nombreUpdateRef.current.value = "";
    cedulaUpdateRef.current.value = "";
    edadUpdateRef.current.value = "";
    sexoUpdateRef.current.value = ""; // Compatible con <select>
    telefonoUpdateRef.current.value = "";
    cargoUpdateRef.current.value = "";
    avatarUpdateRef.current.value = "";
  };

  return {
    idUpdateRef,
    handleSubmitUpdate,
    nombreUpdateRef,
    cedulaUpdateRef,
    edadUpdateRef,
    sexoUpdateRef, // Devuelto como HTMLSelectElement
    telefonoUpdateRef,
    cargoUpdateRef,
    avatarUpdateRef,
  };
};

export default useGestionarUpdateFormulario;
