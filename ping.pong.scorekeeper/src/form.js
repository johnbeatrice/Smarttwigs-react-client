

function Form() {
  return (
    <div className="Form">

     <h1>form</h1>

     <form action="https://SmarttwigsInterview.johnbeatrice.repl.co/addUser" method="POST">
        <label for="username">Username:</label>
        <br/>
        <input type="text" id="username" name="username"/>
          <br/>
          <br />
          <input type="submit" value="Submit"/>
    </form>

    </div>
  );
}

export default Form;