import { FormFieldProps } from "../ContactSection/type";

const TextAreaField = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  rows = 6,
  required = false,
}: FormFieldProps) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium portfolio-text mb-2"
    >
      {label}
      {required && (
        <span className="text-[hsl(var(--portfolio-orange))] ml-1">*</span>
      )}
    </label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      rows={rows}
      className="w-full px-4 py-3 bg-[hsl(var(--portfolio-bg))] border border-[hsl(var(--portfolio-border))] rounded-lg portfolio-text focus:outline-none focus:border-[hsl(var(--portfolio-orange))] focus:ring-2 focus:ring-[hsl(var(--portfolio-orange))]/20 transition-all duration-200 resize-vertical"
      placeholder={placeholder}
      aria-required={required}
    />
  </div>
);

export default TextAreaField;
