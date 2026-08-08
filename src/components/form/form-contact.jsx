import "./form-contact.css";
import Enlace from "../enlace/enlace";

function FormContact() {
    return (
        <section id="contacto" className="w-full">
            <div className="linea-vertical linea-horizontal  mx-auto py-20 px-5 max-w-5xl">
                <div className=" mx-auto">

                    <div className="text-center ">
                        <span className="subtitle-highlight font-orbitron text-3xl sm:text-5xl">Contactame</span>
                        <h2 className="form-contact_title font-orbitron my-5">Hablemos un poco</h2>

                        <p className="form-contact_lead text-center w-full md:w-1/2 mx-auto mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quis quas, deserunt rem, sit minus unde perspiciatis.
                        </p>
                    </div>

                    <form
                        className="form-contact_form mx-auto w-full md:w-1/2"
                        action="https://formsubmit.co/br.casas@duocuc.cl"
                        method="POST"
                    >
                        <input type="hidden" name="_captcha" value="true" />
                        <input type="hidden" name="_subject" value="Nuevo mensaje desde mi portfolio" />
                        <input type="hidden" name="_template" value="table" />

                        <div className="form-row grid-2">
                            <div className="form-field">
                                <label htmlFor="firstName">Nombre</label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-field">
                                <label htmlFor="lastName">Apellido</label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    required
                                    className="form-input"
                                />
                            </div>
                        </div>

                        <div className="form-field">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="message">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                required
                                className="form-textarea"
                            />
                        </div>

                        <button type="submit" className="boton-formulario mt-5 py-2 rounded-lg">
                            Enviar mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default FormContact;