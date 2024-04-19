import { useState } from 'react';

import { Check, Trash } from '@phosphor-icons/react';
import styles from './Item.module.css';

export interface itemProps {
    text: string
}

export function Item({ text }: itemProps) {
    const [isChecked, SetIsChecked] = useState(false);

    function handleCheckboxClick() {
        SetIsChecked(!isChecked)
    }

    return (
        <div className={styles.container}>
            <div className={styles.task}>
                <input readOnly type="checkbox" className={styles.check} />
                <span 
                    className={`${styles.checkbox} ${isChecked ? styles.checked : ''}`} 
                    onClick={handleCheckboxClick}
                >
                    <Check size={14} />
                </span>

                <p 
                    className={`${styles.paragraph} ${isChecked ? styles.paragraphcheked : ''}`}

                >
                    {text}
                </p>

                <button className={styles.btnDelete}>
                    <Trash size={16} />
                </button>
            </div>
        </div>
    );
}