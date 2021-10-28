import styles from './Welcome.module.css'

const Welcome =(props)=>{
    return(
        <div style={{backgroundColor:props.color}} className={styles.welcome}>
            <h1>Name: {props.name}</h1>
            <h2>Age: {props.age}</h2>
        </div>
    )
}

export default Welcome;