import "./form-contact.css";
import Enlace from "../enlace/enlace";

function FormContact() {
    return (
        <section id="contacto" className="w-full linea-horizontal">
            <div className="linea-vertical mx-auto py-25 px-5 sd:px-10 md:px-20 max-w-6xl">
                <div className="mx-auto">

                    <div className="text-center ">
                        <span className=" font-mono  font-bold text-title">Contactame</span>
                        <h2 className="text-[var(--primary-text)] font-mono font-bold my-5">Hablemos un poco</h2>

                        <p className="font-display text-body text-center text-[var(--text-muted)]  w-full md:w-1/2 mx-auto mb-5">
                            ¿Tienes un problema que resolver o una idea que quieras hacer realidad? Pásate a saludar. Estoy a solo un mensaje de distancia.
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
                                <label className="font-mono text-label" htmlFor="firstName">Nombre</label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    required
                                    className="form-input font-display text-body"
                                />
                            </div>

                            <div className="form-field">
                                <label className="font-mono text-label" htmlFor="lastName">Apellido</label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    required
                                    className="form-input font-display text-body"
                                />
                            </div>
                        </div>

                        <div className="form-field">
                            
                            <label className="font-mono  text-label mt-5" htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="form-input font-display text-body"
                            />
                        </div>

                        <div className="form-field">
                            <label className="font-mono text-label mt-5"  htmlFor="message">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                required
                                className="form-textarea font-display text-body"
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
