import "./form-contact.css";

function FormContact() {
    return (
        <section className="form-contact">
            <div className="form-contact__card">
                <div className="form-contact__info">
                    <span className="subtitle-highlight font-orbitron text-5xl sm:text-5xl md:text-5xl lg:text-5xl">Contactame</span>
                    <h2 className="form-contact__title font-orbitron">Hablemos un poco</h2>
                    <p className="form-contact__lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quis quas, deserunt rem, sit minus unde perspiciatis.
                    </p>
                </div>

                <form className="form-contact__form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-row grid-2">
                        <div className="form-field">
                            <label htmlFor="firstName">Primer Nombre</label>
                            <input id="firstName" name="firstName" type="text" placeholder="John" className="form-input" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="lastName">Segundo Nombre</label>
                            <input id="lastName" name="lastName" type="text" placeholder="Doe" className="form-input" />
                        </div>
                    </div>

                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" placeholder="john@gmail.com" className="form-input" />
                    </div>

                    <div className="form-field">
                        <label htmlFor="Mensaje">Message</label>
                        <textarea id="message" name="message" rows={6} placeholder="Hola, me gustaria saber si estas disponible para..." className="form-textarea" />
                    </div>

                    <div className="form-actions">
                        <button type="submit" 
                        className="btn-primary">Enviar mensaje
                        </button>
                    </div>

                       <div className="form-actions">
                        <button type="submit" 
                        className="btn-primary">Modo feedack
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default FormContact;
