const Navi = () => {
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
    </ul>
  );
};

export default Navi;
