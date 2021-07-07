import useForm from '../../hooks/useForm';

import Button from '../Button/Button';

import './form.css';

export default function Form({
  apiEndPointToFetchData,
  apiEndPointToInsertData,
  list,
  setList,
  name,
  textInput,
  setTextInput,
}) {
  const { handleTextInput, handleSubmit } = useForm(
    apiEndPointToFetchData,
    apiEndPointToInsertData,
    list,
    setList,
    textInput,
    setTextInput,
  );

  return (
    <form className="form">
      <textarea
        className="form__input-text"
        name={name}
        onChange={handleTextInput}
        placeholder="Add your thinking"
        type="text"
        value={textInput}
      ></textarea>
      <Button icon="+" onClick={handleSubmit} />
    </form>
  );
}
