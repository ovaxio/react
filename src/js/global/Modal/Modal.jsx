import React from 'react'
import ReactModal from 'react-modal'

import styles from './Modal.less'

ReactModal.setAppElement('#root')
export const Modal = ({ isOpen, children }) =>
  <ReactModal
    overlayClassName={styles.overlay}
    className={styles.content}
    isOpen={isOpen}
    contentLabel="Message d'erreur"
    shouldCloseOnOverlayClick={true}
  >
    {children}
  </ReactModal>