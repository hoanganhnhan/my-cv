import './Contact.scss';
function Contact() {
    return (
        <div className="contact__body">
            <div className="contact__body__header">
                <h1>Contact </h1>
            </div>

            <div className="contact__content">
                <div className="contact__info">
                    <p>
                        <i className="fa-solid fa-location-dot contact__info__icon"></i>Ho Chi Minh, Viet Nam
                    </p>
                    <p>
                        <i className="fa-solid fa-phone contact__info__icon"></i>Phone:
                        <a href="tel:+84385147872"> 0385 147 872</a>
                    </p>
                    <p>
                        <i className="fa-solid fa-envelope contact__info__icon"></i>Email:
                        <a href="mailto:mail@mail.com"> nhanaanhhg@mail.com</a>
                    </p>
                </div>
                <div className="contact__form">
                    <form action="">
                        <div class="contact__form__name__email">
                            <div className="contact__form__content__name">
                                <input type="text" name="" placeholder="Name" required="" id="" class="form-control" />
                            </div>
                            <div className="contact__form__content__email">
                                <input
                                    type="email"
                                    name=""
                                    placeholder="Email"
                                    required=""
                                    id=""
                                    class="form-control"
                                />
                            </div>
                        </div>
                        <div className="contact__form__name__message">
                            <input type="text" name="" placeholder="Message" required="" id="" class="form-control" />
                        </div>
                        <div className="contact__form__name__submit">
                            <input type="submit" name="" value="SEND" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
