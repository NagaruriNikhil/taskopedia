import logo from "../images/react.png"


// When ever  we are using files in src folder then we need to import them
const MainHeader=() => {
    return (
        <div className="pt-3 py-1 pl-2" style={{backgroundColor:"black"}}>
            <img src={logo} style={{height:"35px", verticalAlign: "top"}}></img>
            <span  className="h2 pt-4 text-white-50"> React Course - Taskopedia </span>
        </div>
    );
  }
  
  const subHaederStyle = {
    color: "blueViolet",
    backgroundColor: "lightgray",
  };
  
  const SubHeader=()=> {
    return <h1 style={subHaederStyle} className="text-center"> This will be exciting course</h1>;
  }
  const Header=() => {
    return (
      <div>
        <MainHeader />
        <SubHeader />
      </div>
    );
  }

  export default Header;