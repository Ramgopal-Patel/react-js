function Person(props){
    return (
      <>
        <div className="flex justify-center items-center h-screen w-full">
          <div>
            <p>
              <span className="font-bold">Name:-</span>
              <span className="font-bold text-green-600">{props.name}</span>
            </p>
            <p>
              <span className="font-bold">Age:-</span>
              <span className="text-green-600 font-bold"> {props.age}</span>
            </p>
          </div>
        </div>
      </>
    );

}
export default Person;