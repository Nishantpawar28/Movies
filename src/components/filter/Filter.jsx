import { Multiselect } from "multiselect-react-dropdown";
import "./Filter.css";

const Filter = ({ data, placeholder, handleFilterChange }) => {

  return (
    <>
      <div className="filter">
        <Multiselect
          options={data}
          isObject={false}
          placeholder={placeholder}
          hidePlaceholder="true"
          onSelect={handleFilterChange}
          onRemove={handleFilterChange}
        />
      </div>
    </>
  );
};

export default Filter;
