const Navi = (props) => {
  console.log(props);
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/map">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/map/map">
          map
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">
          logout
        </a>
      </li>
      <label className="userName ml-5">
        안녕하세요. {props.userInfo.name} 님
      </label>
      <label className="userName ml-5">
        {" "}
        권한 - {props.userInfo.accountTypeName}
      </label>
    </ul>
  );
};

export default Navi;
