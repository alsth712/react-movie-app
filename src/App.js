import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  // Form태그의 submit 이벤트를 막기
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // toDo 가 입력되면, 다시 input값을 비워주는 역할
    setToDo("");

    // 절대 직접적으로 State를 수정하지 않는다. 수정하는 함수를 사용하는 것 !
    // setToDos로 array에 element를 추가하는 방법 !
    setToDos((currentArray) => [toDo, ...currentArray]);
    // currentArray에는 기존 input의 value값이 있는 것이고
    // toDo는 새로운 input의 값
    // ...currentArray 는 currentArray라는 배열에 존재하는 요소들이 그대로 오는 것을 의미
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
