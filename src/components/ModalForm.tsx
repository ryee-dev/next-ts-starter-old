import React from 'react';
import { Container } from 'theme-ui';
import { Modal, Button, Form } from 'semantic-ui-react';

interface ModalFormProps {
  open: boolean;
  setOpen: any;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ModalForm: React.FC<> = (props: ModalFormProps) => {
  const { open, setOpen } = props;

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
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
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

export default ModalForm;
