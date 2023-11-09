const Slider = () => {
  function nav(e) {
    console.log(e.target);
    document.getElementById("navbar").classList.toggle("-translate-y-96");
  }
  return (
    <div>
      <div>
        <ul className="md:flex hidden justify-around">
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
          <li>
            <a href="">PORTFOLIO</a>
          </li>
        </ul>
        <div
          className="pt-5 pl-5 pb-5   bg-black space-y-1 block md:hidden "
          onClick={nav}
        >
          <span className=" block mb-1 h-1.5 w-7 bg-white"></span>
          <span className="block h-1.5 mb-1 w-7 bg-white"></span>
          <span className="block h-1.5 w-7 bg-white"> </span>
        </div>
        <div className="duration-1000  " id="navbar">
          <ul className=" flex flex-col w-[100vw] bg-black pl-5 text-white space-y-4 pb-5 justify-around">
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
            <li>
              <a href="">PORTFOLIO</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slider;
