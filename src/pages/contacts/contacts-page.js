import React from 'react'
import { Contact, ContactTitle, Contscts, Section, SectionTitle } from './contacts-page.styles'

const ContactsPage = () => {

    const contacts = {
        adress: "Kabeler Strasse 4, 58099, Hagen",
        email: "info@mks-one.de",
        phone: "+49 2331 - 37640-0"
    }

    return (
        <Section>
            <SectionTitle>
                We encourage you to connect with us.
            </SectionTitle>
            <Contscts>

                <Contact>
                    <ContactTitle>
                        Phone
                    </ContactTitle>
                    {contacts.phone}
                </Contact>
                <Contact>
                    <ContactTitle>
                        E-mail
                    </ContactTitle>
                    {contacts.email}
                </Contact>
                <Contact>
                    <ContactTitle>
                        Addres
                    </ContactTitle>
                    {contacts.adress}
                </Contact>
            </Contscts>
        </Section>
    )
}

export default ContactsPage