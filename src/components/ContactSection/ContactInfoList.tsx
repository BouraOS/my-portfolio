import ContactInfoCard from "./ContactInfoCard";

// Contact Info List
const ContactInfoList = ({ contactInfo }) => (
  <div>
    <h3 className="text-xl font-semibold portfolio-text mb-6">
      Contact Information
    </h3>
    <div className="space-y-6" role="list">
      {contactInfo.map((info, index) => (
        <div key={index} role="listitem">
          <ContactInfoCard info={info} />
        </div>
      ))}
    </div>
  </div>
);

export default ContactInfoList;
