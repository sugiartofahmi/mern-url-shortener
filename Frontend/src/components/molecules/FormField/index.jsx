import TextField from "@/components/atoms/TextField";

const FormField = (props) => {
  const { placeholder, value, onChange, title, name } = props;
  return (
    <div className="flex flex-col items-center gap-2">
      <label className="font-semibold">{title}</label>
      <TextField
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormField;
