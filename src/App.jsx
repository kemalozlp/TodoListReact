import './App.css'

function App() {

  return (
    <>
      <div className="header">
        < TodoList />
      </div>
    </>
  )
}

function TodoList() {
  return (
    <div className="container">

      <div className="todoTop">
        <input type="text" placeholder="Add a new task" />
        <button ><img src="/images/add_button.png" alt="" /></button>
      </div>
      <h4>Tasks to do</h4>


    </div>
  )
}
export default App
