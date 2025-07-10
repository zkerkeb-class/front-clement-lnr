import styles from './index.module.scss'

interface InputProps {
  label?: string;
  name: string;
  id?: string;
  value: string | number;
  placeholder?: string;
  type: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  isRequired?: boolean;
  autocomplete?: string;
}

const Index: React.FC<InputProps> = ({ label, name, value, id, placeholder, type, onChange, onFocus, isRequired, autocomplete }) => {
  return (
    <>
        <div className={styles.input_cont}>
            {
            label && (
                <label htmlFor={name}>{label}</label>
            )
            }
            <input className={styles.text_input} type={type} name={name} id={id} value={value} required={isRequired} placeholder={placeholder} onChange={onChange} onFocus={onFocus} autoComplete={autocomplete}/>
        </div>
    </>
  );
}
  
export default Index;