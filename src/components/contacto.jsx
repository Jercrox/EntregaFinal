import React, { useState } from 'react';
import '../contacto.css';

const Contacto = () => {
    const [mostrarAviso, setMostrarAviso] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        comentario: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleClick = () => {
        setMostrarAviso(true);

        setFormData({
            nombre: '',
            apellido: '',
            comentario: '',
            email: ''
        });

        setTimeout(() => {
            setMostrarAviso(false);
        }, 3000);
    };

    return (
        <>
            <div className='bg-gray-50 p-10 gap-4'>

                <div className="col-span-1">
                    <div id="formulario" className="mt-4">
                        <h6 className="text-lg font-bold">Envíanos un mensaje</h6>

                        <div id="nombre" className="flex mt-2">
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="form-control mr-2 p-2 w-full border border-gray-300 rounded" placeholder="Nombre" aria-label="Nombre" />
                            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} className="form-control p-2 w-full border border-gray-300 rounded" placeholder="Apellido" aria-label="Apellido" />
                        </div>

                        <div id="comentario" className="form-floating mt-2">
                            <textarea name="comentario" value={formData.comentario} onChange={handleChange} className="form-control p-2 w-full border border-gray-300 rounded" placeholder="Deje su comentario aquí" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                        </div>

                        <div id="email" className="input-group mt-2">
                            <input type="text" name="email" value={formData.email} onChange={handleChange} className="form-control p-2 w-full border border-gray-300 rounded" placeholder="Email" aria-label="Email" />
                        </div>

                        <div className="mt-5">
                            <button className="btn btn-outline-secondary px-8 py-2 border border-blue-300 rounded bg-blue-400 font-bold" type="button" id="button-addon2" onClick={handleClick}>Enviar</button>
                        </div>

                        {mostrarAviso && (
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                                <div className="bg-white p-8 rounded-lg">
                                    <p className="text-xl font-bold">Gracias por enviarnos su mensaje, en breve uno de nuestros representantes se pondrá en contacto con usted.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <footer className="mt-4 bg-cyan-400 p-20 flex justify-center flex-col items-center">
                <div>
                    <p>Todo para Natación</p>
                </div>
                <div>
                    <p><b>Porque nadar te hace bien.</b></p>
                </div>
            </footer>
        </>
    );
}

export default Contacto;
