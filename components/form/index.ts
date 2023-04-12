export * from './form';
export * from './form.types';
export * from './item';
export * from './item.types';

import InternalForm from './form';
import FormItem from './item';
import context from './context';
import useContext from './hooks/useContext';

const Form = InternalForm as typeof InternalForm & {
  Item: typeof FormItem;
  context: typeof context;
  useContext: typeof useContext;
};

Form.Item = FormItem;
Form.context = context;
Form.useContext = useContext;

export default Form;
