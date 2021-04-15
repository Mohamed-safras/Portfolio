import React from "react";
import facebook from "../../assets/facebook.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/link.png";
import email from "../../assets/gmail.png";
import {
  ContactContiner,
  ContactContinerBody,
  ContactDetail,
  ContactDetailHeader,
  ContactDetailHeaderH1,
  ContactDetailHeaderp,
  ContactDetailFollow,
  Image,
  ContactPerson,
  ContactPersonImage,
} from "../../components/Contacts/style";
import content from "../../content";
const Contact = () => {
  return (
    <ContactContiner id="contact">
      <ContactContinerBody>
        <ContactPerson>
          <ContactPersonImage src={content.header.img} />
        </ContactPerson>
        <ContactDetail>
          <ContactDetailHeader>
            <ContactDetailHeaderH1>Ping Me! </ContactDetailHeaderH1>
            <ContactDetailHeaderp>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </ContactDetailHeaderp>
          </ContactDetailHeader>
          <ContactDetailFollow>
            <Image src={facebook} />
            <Image src={github} />
            <Image src={linkedin} />
            <Image src={email} />
          </ContactDetailFollow>
        </ContactDetail>
      </ContactContinerBody>
    </ContactContiner>
  );
};

export default Contact;
