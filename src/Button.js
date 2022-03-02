import PropTypes from "prop-types";
// prop-types 설치 이후 import해주기
import styles from "./Button.module.css";

// App.js에서 받아온 text Prop을 사용
function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

// Button의 prop-types 정의해주기
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
// export defult는 변수, 함수, 오브젝트, 클래스 등을 전달할 수 있는 명령어
// export 뒤에 default를 붙이게 되면 중괄호 없이 변수 등을 import
// 우리의 App.js에서 Button을 가져올 수 있게 하고 싶기 때문
