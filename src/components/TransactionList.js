import React from 'react'
import styles from '../pages/Home.module.css'


const TransactionList = ({documents}) => {
  return (
    <ul className={styles.transactions}>
        {documents.map((items)=>(
            <li key={items.id}>
                <p className={styles.name}>{items.transactionAmount}</p>
                <p className={styles.amount}>{items.transactionValue}</p>
            </li>
        ))}

    </ul>
  )
}

export default TransactionList