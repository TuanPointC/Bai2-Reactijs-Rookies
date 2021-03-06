import { useState } from "react";
import styles from './Checkbox.module.css'

const Checkbox = () => {
    const [value, setValue] = useState({ "coding": true, "music": true, "reading_books": true })
    const changeValue = (type) => {
        var valueCopy = { ...value }
        valueCopy[type] = !value[type]
        setValue(valueCopy)
    }

    const changeAll = (event) => {
        setValue({...value,coding:event.target.checked, music:event.target.checked,reading_books:event.target.checked})
    }
    return (
        <div className={styles.checkbox}>
            <input
                type="checkbox"
                id="all"
                checked={value.coding && value.music && value.reading_books}
                onClick={changeAll}
            />
            <label for="all"> All</label><br />
            <input
                type="checkbox"
                id="coding"
                checked={value.coding}
                onClick={() => changeValue("coding")}
            />
            <label for="coding"> Coding</label><br />
            <input
                type="checkbox"
                id="music"
                checked={value.music}
                onClick={() => changeValue("music")}
            />
            <label for="music"> Music</label><br />
            <input
                type="checkbox"
                id="books"
                checked={value.reading_books}
                onClick={() => changeValue("reading_books")}
            />
            <label for="books"> Reading books</label><br />

            <p>You select: {JSON.stringify(value)} </p>
        </div>
    )
}
export default Checkbox;