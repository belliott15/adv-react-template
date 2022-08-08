import { useState } from 'react';
import useForm from '../../state/hooks/formData';
import { useProfile } from '../../state/hooks/userAuth';
import { FormButton, InputControl } from '../Forms/FormControls';
import Avatar from './Avatar';
import styles from './Profile.css';


export default function Profile() { 
  const [profile, handleChange] = useForm();
  const [, updateProfile] = useProfile();
  const [preview, setPreview] = useState();

  const handlePreview = (e) => {
    const target = e.target;
    const [file] = target.files;
    setPreview(URL.createObjectURL(file));
    handleChange({
      target: {
        name: target.name,
        value: file
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile(profile);
  };

  return (
    <section className={styles.Profile}>
      <form onSubmit={handleSubmit}>
        <h1>Profile</h1>

        <InputControl 
          label="Username"
          name="username"
          placeholder="Username"
          value={profile.username}
          onChange={handleChange}
          required
        />

        <InputControl 
          className={styles.Avatar}
          label="Avatar"
          name="avatar"
          type="file"
          onChange={handlePreview}
          required
        >
          <Avatar src={preview} username={profile.username} />
        </InputControl>

        <FormButton>Update</FormButton>

      </form>
    </section>
  );
}
