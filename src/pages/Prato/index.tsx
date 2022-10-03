import styles from './Prato.module.scss';
import { useLocation } from 'react-router-dom';

export function Prato() {
  const urlLocation = useLocation();
  
  console.log(urlLocation);

  return (
    <div>
      {useLocation().state?.id}
    </div>
  );
}