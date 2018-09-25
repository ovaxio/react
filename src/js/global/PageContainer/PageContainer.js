import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { isErrorModalOpened } from 'js/global/ui/duck/selectors'
import { closeModal } from 'js/global/ui/duck/actions'
import { Header } from 'js/global/Header'
import { Modal } from 'js/global/Modal'

import styles from './PageContainer.less'
export const PageContainerComponent = ({ children, isModalOpen, closeModal }) => (
  <Fragment>
    <Header />
    <div className={styles.page}>{children}</div>
    <Modal isOpen={isModalOpen}>
      <button onClick={closeModal}>×</button>
      <p>
        Thank you, you already chosen your three favorite movies. <br />
        You can not change your choices.
      </p>
    </Modal>
  </Fragment>
)


const mapStateToProps = state => ({
  isModalOpen: isErrorModalOpened(state)
})
const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export const PageContainer = connect(mapStateToProps, mapDispatchToProps)(PageContainerComponent)