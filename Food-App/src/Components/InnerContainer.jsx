import React from 'react'
import styles from "./innerContainer.module.css"

const InnerContainer = ({children}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default InnerContainer