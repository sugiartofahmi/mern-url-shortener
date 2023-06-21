const TextField = (props) => {
  const { placeholder, value, onChange, name } = props;
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      className="border-2 border-[#7f8ea5] p-3 bg-[#F1F3F5] focus:outline-none rounded-md "
    />
  );
};

export default TextField;
