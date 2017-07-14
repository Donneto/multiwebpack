console.log(moment());

class App extends React.Component {

  render() {

    return(
      <div>
        <h1>React is in da housa!</h1>
      </div>
    );
  }
}

ReactDom.render(
  <App/>,
  document.getElementById('root')
);

export default App;
