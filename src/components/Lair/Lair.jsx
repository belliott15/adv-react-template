import { 
  InputControl, 
  SelectControl, 
  TextAreaControl 
} from '../Forms/FormControls';
import styles from './Lair.css';

export default function Lair() {
  return (
    <section className={styles.Lair}>
      <form>
        <InputControl 
          label="Email" 
          name="email" 
          placeholder="Enter your email here..."
          type="email"
          required
        />

        <SelectControl label="Class" >
          <option>This</option>
          <option>That</option>
          <option>Druid</option>
          <option>Another Thing</option>
          <option>Rogue</option>
          <option>Paladin</option>
          <option>Basic Bitch</option>
        </SelectControl>
            

        <TextAreaControl label="Bio" placeholder="Character Details" />

        <InputControl 
          label="Race"
          placeholder="Enter your Character Race..."
        />
      </form>
    </section>
  );
}
