import styles from './SelectPage.module.css'
const SelectPage = (props) => {
    const changValue = (event) => {
        props.setValue(event.target.value)
    }
    return (
        <div className={styles.selectPage}>
            <select value={props.value} onChange={changValue}>
                <option value="Welcome">Welcome</option>
                <option value="Counter">Counter</option>
                <option value="Checkbox">Checkbox</option>
            </select>
        </div>
    )
}
export default SelectPage;