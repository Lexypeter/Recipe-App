import React from 'react'
import styles from "./container.module.css"

const Container = ({children}) => {
  return (
    <div className={styles.parent}>{children}</div>
  )
}

export default Container