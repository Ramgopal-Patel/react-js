
function SignIn({onClick}){
    return (
      <>
        <div className="h-screen w-full flex justify-center items-center p-7">
          <form className="w-64 h-[50vh] flex flex-col justify-center items-center border rounded-lg shadow-md shadow-purple-800">
            <h1 className="font-serif text-3xl my-10">Instagram</h1>
            <input
              className=" border-2 border-slate-800 block w-[80%] px-2 text-sm py-1 my-1"
              type="text"
              required
              placeholder="Mobile number, or email"
            />

            <input
              className=" border-2 border-slate-800 block w-[80%] px-2 text-sm py-1 my-1"
              type="password"
              placeholder="Password"
            />
            <input
              className=" border-2 border-blue-600 bg-blue-600 hover:bg-blue-800 block w-[80%] px-2 text-sm py-1 my-1 text-white font-bold cursor-pointer"
              type="button"
              value={"Sign In"}
            />
            <p className="my-6">
              Don&apos;t Have account?{" "}
              <span onClick={onClick} className="text-blue-600 cursor-pointer font-bold">
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </>
    );

}

export default SignIn;