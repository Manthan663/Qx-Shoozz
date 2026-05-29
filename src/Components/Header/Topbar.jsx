const Topbar = () => {
  return (
    <div className="border-b border-gray-200 bg-gray-100">
      <div className="h-10 flex items-center justify-between px-10 text-sm ">
        
        <p>One Day Delivery Available</p>

        <div className="flex items-center gap-4">
          <p>Login / Register</p>

          <div className="flex  text-lg gap-7">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Topbar;