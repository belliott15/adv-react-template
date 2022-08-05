import { useState } from 'react';
import useForm from '../../state/hooks/formData';
import { useProfile } from '../../state/hooks/userAuth';
import { FormButton, InputControl } from '../Forms/FormControls';
import User from '../Page/Header/User';

export default function Profile() { 
  const [profile, handleChange] = useForm();
  const [updateProfile] = useProfile();
  const [preview, setPreview] = useState();
  const [updating, setUpdating] = useState(false);

  const handlePreview = (e) => {
    const target = e.target;
    const [file] = target.files;
    setPreview(URL.createObjectURL(false));
    handleChange({
      target: {
        name: target.name,
        value: file
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    await updateProfile(profile);
    setUpdating(false);
  };

  return (
    <section>
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
          label="Avatar"
          name="avatar"
          type="file"
          onChange={handleChange}
          required
        />

        <FormButton>Update</FormButton>

      </form>
    </section>
  );
}
