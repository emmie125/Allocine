import React,{useState} from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ModalExampleBasic(props) {
  

  return (
    <Modal
      basic
      onClose={props.onClose}
      onOpen={props.onOpen}
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
        <Button basic color='red' inverted onClick={props.onClose}>
          <Icon name='remove' /> No
        </Button>
        
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleBasic
