import Subdivisao from "./Subdivisao";
import styles from '../styles/Linha.css';

export default function Linha(props) {
    return(
        <div className={styles.linha}>
        
        <Subdivisao />
        <Subdivisao preto/>
        
        <Subdivisao />
        <Subdivisao preto/>
        
        <Subdivisao />
        <Subdivisao preto/>
        
        <Subdivisao />
        <Subdivisao preto/>
        </div>
    )
}