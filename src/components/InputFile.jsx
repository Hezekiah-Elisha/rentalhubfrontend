import PropTypes from 'prop-types';

InputFile.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
  };

export default function InputFile({ title, options = [] }) {
  return (
    <div className="relative w-full lg:w-1/5">
        <select type="text" className="w-full p-2 text-blue-950 placeholder:text-gray-800 text-lg bg-inherit outline-none" placeholder="City" defaultValue={title}>
            <option value="" disabled defaultValue={"House Type"}>{title}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}
