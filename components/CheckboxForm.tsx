import { useState } from 'react';
import styles from '../styles/checkBox.module.scss'

interface CheckboxFormProps {
  onSubmit: (formData: { location: string[]; accepted: boolean }) => void;
}

export function CheckboxForm({ onSubmit }: CheckboxFormProps) {
  const [formData, setFormData] = useState<{ [key: string]: boolean }>({
    astana: false,
    almaty: false,
    southKazakhstan: false,
    northKazakhstan: false,
    eastKazakhstan: false,
    westKazakhstan: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: checked }));
  };

  const handleAcceptedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, accepted: checked }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ location: Object.keys(formData).filter(key => formData[key]), accepted: formData.accepted });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.checkBox}>
      <label>
        <input type="checkbox" name="astana" checked={formData.astana} onChange={handleCheckboxChange} />
        Astana
      </label>
      <label>
        <input type="checkbox" name="almaty" checked={formData.almaty} onChange={handleCheckboxChange} />
        Almaty
      </label>
      <label>
        <input type="checkbox" name="southKazakhstan" checked={formData.southKazakhstan} onChange={handleCheckboxChange} />
        South-Kazakhstan
      </label>
      <label>
        <input type="checkbox" name="northKazakhstan" checked={formData.northKazakhstan} onChange={handleCheckboxChange} />
        North-Kazakhstan
      </label>
      <label>
        <input type="checkbox" name="eastKazakhstan" checked={formData.eastKazakhstan} onChange={handleCheckboxChange} />
        East-Kazakhstan
      </label>
      <label>
        <input type="checkbox" name="westKazakhstan" checked={formData.westKazakhstan} onChange={handleCheckboxChange} />
        West-Kazakhstan
      </label>
      <button type="submit" className={styles.btn}>Submit</button>
    </form>
  );
}
