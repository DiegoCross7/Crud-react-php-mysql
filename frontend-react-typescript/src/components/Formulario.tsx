import { useState } from "react";
import SelectEdad from "./SelectEdad";
import SelectCargoEmpleado from "./SelectCargoEmpleado";

interface FormularioProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>, sexo: string) => void;
  nombreRef: React.RefObject<HTMLInputElement>;
  cedulaRef: React.RefObject<HTMLInputElement>;
  edadRef: React.RefObject<HTMLSelectElement>;
  telefonoRef: React.RefObject<HTMLInputElement>;
  cargoRef: React.RefObject<HTMLSelectElement>;
  avatarRef: React.RefObject<HTMLInputElement>;
}

const Formulario: React.FC<FormularioProps> = ({
  handleSubmit,
  nombreRef,
  cedulaRef,
  edadRef,
  telefonoRef,
  cargoRef,
  avatarRef,
}) => {
  const [sexo, setSexo] = useState<string>("masculino"); // Estado para manejar el valor de sexo

  const handleSexoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSexo(event.target.value); // Actualiza el estado con el valor seleccionado
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(event, sexo); // Pasa el valor de sexo al manejador de envío
  };

  return (
    <>
      <h1 className="fw-bold-900 mb-4">
        Registrar Empleado <hr />
      </h1>

      <form
        className="px-5"
        onSubmit={onSubmit}
        method="POST"
        encType="multipart/form-data"
      >
        <div className="mb-3">
          <label className="form-label float-start">Nombre</label>
          <input type="text" ref={nombreRef} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label float-start">Cédula (NIT)</label>
          <input type="number" ref={cedulaRef} className="form-control" required />
        </div>
        <div className="row">
          <div className="col-md-6">
            <label className="form-label float-start">Seleccione la edad</label>
            <SelectEdad edadRef={edadRef} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Sexo del empleado</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="masculino"
                value="masculino"
                checked={sexo === "masculino"}
                onChange={handleSexoChange}
                name="sexo"
              />
              <label className="form-check-label" htmlFor="masculino">
                Masculino
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="femenino"
                value="femenino"
                checked={sexo === "femenino"}
                onChange={handleSexoChange}
                name="sexo"
              />
              <label className="form-check-label" htmlFor="femenino">
                Femenino
              </label>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label float-start">Teléfono</label>
          <input type="number" ref={telefonoRef} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label float-start">Seleccione el Cargo</label>
          <SelectCargoEmpleado cargoRef={cargoRef} />
        </div>
        <div className="mb-3 mt-4">
          <label className="form-label float-start">Foto del empleado</label>
          <input
            className="form-control form-control-sm"
            type="file"
            name="avatar"
            ref={avatarRef}
            accept="image/png, image/jpeg"
            required
          />
        </div>

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary btn_add">
            Registrar Empleado
          </button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
