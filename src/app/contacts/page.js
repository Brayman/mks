import React from 'react'
import './page.modules.css'
const ContactsPage = () => {

    const contacts = {
        adress: "Kabeler Strasse 4, 58099, Hagen",
        email: "info@mks-one.de",
        phone: "+49 2331 - 37640-0"
    }

    return (
        <div className='Section'>
            <h2 className='SectionTitle'>
                We encourage you to connect with us.
            </h2 >
            <div className='Contscts'>

                <div className='Contact'>
                    <h4 className='ContactTitle'>
                        Phone
                    </h4>
                    {contacts.phone}
                </div>
                <div className='Contact'>
                    <h4 className='ContactTitle'>
                        E-mail
                    </h4>
                    {contacts.email}
                </div>
                <div className='Contact'>
                    <h4 className='ContactTitle'>
                        Addres
                    </h4>
                    {contacts.adress}
                </div>
            </div>
        </div>
    )
}

export default ContactsPage