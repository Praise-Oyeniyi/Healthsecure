import {Controller} from 'react-hook-form';

const FormComp = ({name,placeholder,control, style, errors, ...OtherProps}) => {
  const newName = name.split(' ').join("");

  return (
    <div className="relative">
      <h5 className="text-xs text-gray-600 pb-1 font-semibold capitalize">{name+'*'}</h5>
      <Controller
        control={control}
        name={newName}
        render={({field: {value, onChange, onBlur}}) => (
            <input
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                className={`${errors[newName] && 'border-red-500 ', style} `}
                placeholder={placeholder}
                {...OtherProps}
            />
        )}
      />
      
      <h6 className={`text-red-500 text-xs text-right font-bold tracking-wide ${errors[name] && 'pt-0'}`}>
          {errors && errors[newName] && errors[newName]?.message}
      </h6>
    </div>
  );
};

export default FormComp;