import { 
  Fieldset,
  FormButton,
  InputControl, 
  SelectControl, 
  TextAreaControl 
} from '../Forms/FormControls';
import styles from './Lair.css';

export default function Lair() {
  return (
    <section className={styles.Lair}>
      <form>
        <Fieldset legend="Character Build" >
          <InputControl 
            label="Email" 
            name="email" 
            placeholder="Enter your email here..."
            type="email"
            required
          />

          <InputControl 
            label="Character Name"
            placeholder="Your Character Name"
            required
          />
        </Fieldset>

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

        <FormButton>Submit</FormButton>
        
        
      </form>
    </section>
  );
}
