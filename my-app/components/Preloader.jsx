// import styled from 'styled-components'
import styles from '../styles/components/Preloader.module.scss';

const Preloader = () => {
  return (
    // <div className={styles.loading}>
    // <div className={styles.loading_inner>
    // 	<span>L</span>
    // 	<span>O</span>
    // 	<span>A</span>
    // 	<span>D</span>
    // 	<span>I</span>
    // 	<span>N</span>
    // 	<span>G</span>
    // 	<span>.</span>
    // 	<span>.</span>
    // 	<span>.</span>
    // </div>
    // </div>

    <div className={styles.wave_wrapper}>
      <div className={styles.wave} />
      <div>
      <div className={styles.loading_inner}>
    		<span>L</span>
    		<span>O</span>
    		<span>A</span>
    		<span>D</span>
    		<span>I</span>
    		<span>N</span>
    		<span>G</span>
    	</div>
      </div>
    </div>

    // <div className={styles.shadow}>
    //   <div className={styles.shadow_inner} />
    //   <svg className={styles.logo_bottom} >
    //     <use href='/assets/icons/sprite.svg#logo_bottom'></use>
    //   </svg>
    // </div>
  );
};

export default Preloader;
