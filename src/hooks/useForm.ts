import {useState} from 'react';

type Return<T> = [T, Handlers];

interface Handlers {
  reset: () => void;
  handleChange: (name: string, value: string | number) => void;
}

const useForm = <T extends Object>(initialValues: T): Return<T> => {
  const [state, setstate] = useState(initialValues);

  const handleChange = (name: string, value: string | number) => {
    setstate(f => ({...f, [name]: value}));
  };

  const reset = () => setstate(initialValues);

  return [state, {reset, handleChange}];
};

export default useForm;
