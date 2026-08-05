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

              <form
    className="form-contact__form"
    action="https://formsubmit.co/ecd140b5d5b1a3deb8ffe5ca7be23196"
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

    <button type="submit" className="btn-primary">
        Enviar mensaje
    </button>
</form>
            </div>
        </section>
    );
}

export default FormContact;
