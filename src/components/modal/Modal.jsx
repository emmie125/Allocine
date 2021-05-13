import React,{useState} from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ModalExampleBasic(props) {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={props.open}
      size='small'
     
    >
      <Modal.Content>
            <>
                <iframe id="player" type="text/html" width="640" height="390"
                src={`http://www.youtube.com/embed/${props.key}?enablejsapi=1&origin=http://example.com`}
                frameborder="0" title='video'></iframe>
            </>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleBasic
