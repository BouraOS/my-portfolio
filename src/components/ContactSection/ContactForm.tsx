import { Send } from "lucide-react";
import { useState } from "react";
import { ContactFormData } from "./type";
import TextInput from "../ui/TextInput";
import TextAreaField from "../ui/TextAreaField";

const SubmitButton = ({ text }: { text: string }) => (
  <button
    type="submit"
    className="portfolio-orange portfolio-orange-hover px-8 py-3 rounded-lg font-medium flex items-center space-x-2 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--portfolio-orange))] focus:ring-offset-2"
    aria-label={text}
  >
    <Send size={18} aria-hidden="true" />
    <span>{text}</span>
  </button>
);

const ContactForm = ({ t }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    // Example: Send to API, show success message, etc.
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="portfolio-card p-8">
      <h3 className="text-xl font-semibold portfolio-text mb-6">
        {t("contact.form.title")}
      </h3>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
        aria-label="Contact form"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <TextInput
            id="name"
            name="name"
            label={t("contact.form.name")}
            placeholder={t("contact.form.namePlaceholder")}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <TextInput
            id="email"
            name="email"
            type="email"
            label={t("contact.form.email")}
            placeholder={t("contact.form.emailPlaceholder")}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <TextInput
          id="subject"
          name="subject"
          label={t("contact.form.subject")}
          placeholder={t("contact.form.subjectPlaceholder")}
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <TextAreaField
          id="message"
          name="message"
          label={t("contact.form.message")}
          placeholder={t("contact.form.messagePlaceholder")}
          value={formData.message}
          onChange={handleChange}
          rows={6}
          required
        />

        <SubmitButton text={t("contact.form.send")} />
      </form>
    </div>
  );
};

export default ContactForm;
