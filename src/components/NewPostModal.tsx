import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Flex, Image } from 'theme-ui';
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
    imageUpload: '',
  });

  const { dispatch } = useContext(AppContext);

  // const uploadedImageRef = useRef(null);

  const handleForm = (type: string, value: any) => {
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
      imageUpload: '',
    });
    // eslint-disable-next-line no-console
    console.log(form.imageUpload);
  };

  return (
    <Modal onClose={() => setOpen(false)} open={open}>
      <Container
        my={[3]}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          // flexDirection: 'column',
        }}
      >
        {form.imageUpload && (
          <Image
            src={URL.createObjectURL(form.imageUpload)}
            alt={form.name}
            sx={{
              maxWidth: '300px',
            }}
          />
        )}
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
          <Form.Field>
            <label htmlFor="file">Add Image</label>
            <input
              type="file"
              accept="image/*"
              name="image-upload"
              onChange={(e) => {
                handleForm('imageUpload', e.target.files[0]);
              }}
            />
          </Form.Field>
          <Flex
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Button
              style={{ marginRight: 0 }}
              color="red"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
            <Button type="submit">Submit</Button>
          </Flex>
        </Form>
      </Container>
    </Modal>
  );
};

export default NewPostModal;
