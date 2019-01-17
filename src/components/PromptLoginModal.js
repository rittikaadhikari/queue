import React from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

const PromptLoginModal = props => (
  <Modal isOpen={props.isOpen}>
    <ModalHeader>RIP</ModalHeader>
    <ModalBody>
      Something went wrong. Reload to try again.
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={props.confirm}>
        Reload
      </Button>
    </ModalFooter>
  </Modal>
)

PromptLoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  confirm: PropTypes.func.isRequired,
}

export default PromptLoginModal
