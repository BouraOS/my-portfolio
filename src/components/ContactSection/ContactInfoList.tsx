import ContactInfoCard from "./ContactInfoCard";
interface ContactInfo {
  icon: React.ElementType;
  title: string;
  value: string;
  subtitle: string;
  href?: string;
}

const ContactInfoList = ({ contactInfo, t }) => (
  <div>
    <h3 className="text-xl font-semibold portfolio-text mb-6">
      {t("contact.infoTitle")}
    </h3>
    <div className="space-y-6" role="list">
      {contactInfo.map((info: ContactInfo, index: number) => (
        <div key={index} role="listitem">
          <ContactInfoCard info={info} />
        </div>
      ))}
    </div>
  </div>
);

export default ContactInfoList;
