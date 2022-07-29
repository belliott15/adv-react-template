import { 
  CheckBoxControl,
  CheckboxOption,
  Fieldset,
  FormButton,
  InputControl, 
  OptionGroupControl, 
  RadioOption, 
  SelectControl, 
  TextAreaControl 
} from '../Forms/FormControls';
import styles from './Lair.css';

export default function Lair() {

  function handleSubmit(e){
    e.preventDefault();
    window.location.replace('/');
  }

  return (
    <section className={styles.Lair}>
      <form onSubmit={handleSubmit}>
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
        <OptionGroupControl
          label="What is your background?"
          size="120px"
        >
          <CheckboxOption text="Royalty"/>
          <CheckboxOption text="Hermit"/>
          <CheckboxOption text="Entertainer"/>
          <CheckboxOption text="Thief"/>
          <CheckboxOption text="Merchant"/>
          <CheckboxOption text="Adventurer"/>
        </OptionGroupControl>
          

        <SelectControl label="Class" >
          <option>This</option>
          <option>That</option>
          <option>Druid</option>
          <option>Another Thing</option>
          <option>Rogue</option>
          <option>Paladin</option>
          <option>Basic Bitch</option>
        </SelectControl>
            
        <OptionGroupControl 
          name="race"
          label="What race are you?"
          size="95px">
          <RadioOption value={1} text="Human" />
          <RadioOption value={2} text="Dragonborn" />
          <RadioOption value={3} text="Elf" />
          <RadioOption value={4} text="Tiefling" />
          <RadioOption value={5} text="Gnome" />
          <RadioOption value={6} text="Half-Orc" />
          <RadioOption value={7} text="Dwarf" />
          <RadioOption value={8} text="Halfling" />
        </OptionGroupControl>
        
        <TextAreaControl 
          label="Bio" 
          placeholder="Character Details" 
        />

        <CheckBoxControl 
          label="Would you like to receive dragon mail?"
          text="Yes, I love dragon mail!"
        />

        <FormButton onClick={handleSubmit}>Submit</FormButton>
        
        
      </form>
    </section>
  );
}
