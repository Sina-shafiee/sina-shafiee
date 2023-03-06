import styles from './Button.module.css';
import { ButtonProps } from './Button.types';

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={styles.btn} {...props}>
      {children}
    </button>
  );
};

export default Button;
