import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from 'theme-ui';
import { Modal, Button, Form } from 'semantic-ui-react';
import { AppContext } from '../context';
import { Types } from '../utils/types';
import { v4 as uuid } from 'uuid';

interface ModalFormProps {
  open: boolean;
  setOpen: any;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const NewPostModal: React.FC<> = (props: ModalFormProps) => {
  const { open, setOpen } = props;

  const [form, setForm] = useState({
    name: '',
  });

  const { dispatch } = useContext(AppContext);

  const handleForm = (type: string, value: string) => {
    setForm((form) => ({
      ...form,
      [type]: value,
    }));
  };

  const createPost = () => {
    dispatch({
      type: Types.Create,
      payload: {
        id: uuid(),
        name: form.name,
      },
    });
  };

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = () => {
    createPost();
    setOpen(false);
    setForm({
      name: '',
    });
  };

  return (
    <Modal onClose={() => setOpen(false)} open={open}>
      <Container
        my={[3]}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'column',
        }}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Field>
            <label>Name</label>
            <input
              value={form.name}
              onChange={(e) => {
                handleForm('name', e.target.value);
              }}
              name="name"
              placeholder="Name"
              ref={register({ required: true })}
            />
            {errors.name && 'Name is required.'}
          </Form.Field>
          <Button type="submit">Submit</Button>
          <Button color="red" onClick={() => setOpen(false)}>
            Close
          </Button>
        </Form>
      </Container>
    </Modal>
  );
};

export default NewPostModal;
