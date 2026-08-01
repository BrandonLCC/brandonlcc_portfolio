import "./form-contact.css";

function FormContact() {
    return (
        <section className="form-contact">
            <div className="form-contact__card">
                <div className="form-contact__info">
                    <span className="subtitle-highlight form-contact__eyebrow">Contactame</span>
                    <h2 className="form-contact__title">Hablemos un poco</h2>
                    <p className="form-contact__lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quis quas, deserunt rem, sit minus unde perspiciatis.
                    </p>
                </div>

                <form className="form-contact__form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-row grid-2">
                        <div className="form-field">
                            <label htmlFor="firstName">First Name</label>
                            <input id="firstName" name="firstName" type="text" placeholder="John" className="form-input" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="lastName">Last Name</label>
                            <input id="lastName" name="lastName" type="text" placeholder="Doe" className="form-input" />
                        </div>
                    </div>

                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" placeholder="john@gmail.com" className="form-input" />
                    </div>

                    <div className="form-field">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={6} placeholder="Hi, I'd like to know more about your services..." className="form-textarea" />
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn-primary">Send message</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default FormContact;
