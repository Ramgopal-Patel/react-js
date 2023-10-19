function Button(props) {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="animate-bounce text-green-600  mb-1">
          <i className="fa fa-arrow-down text-2xl" aria-hidden="true"></i>
        </div>
        <button
          className="bg-slate-800 text-white px-5 py-1 font-bold rounded-lg"
          onClick={props.onClick}
        >
          {props.text}
        </button>
      </div>
    </>
  );
}

export default Button;
