import { useState } from 'react';

import { Check, Trash } from '@phosphor-icons/react';
import styles from './Item.module.css';

import { TaskProps } from '../../App';

export interface itemProps {
    data: TaskProps
}

export function Item({ data }: itemProps) {
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
                    {data.text}
                </p>

                <button className={styles.btnDelete}>
                    <Trash size={16} />
                </button>
            </div>
        </div>
    );
}