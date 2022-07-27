import { InputControl } from '../Forms/FormControls';
import styles from './Lair.css';

export default function Lair() {
  return (
    <section className={styles.Lair}>
      <form>
        <InputControl 
          label="email" 
          name="email" 
          placeholder="Enter your email here..."
          type="email"
          required
        />

        <label>
          Class:
          <select>
            <option>This</option>
            <option>That</option>
            <option>Druid</option>
            <option>Another Thing</option>
            <option>Rogue</option>
            <option>Paladin</option>
            <option>Basic Bitch</option>
          </select>
        </label>

        <label>
          Bio:
          <textarea></textarea>
        </label>

        <InputControl 
          label="Race"
          placeholder="Enter your Character Race..."
        />
      </form>
    </section>
  );
}
