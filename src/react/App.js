import React from "react"; //Importing React to create react components
import Start from "./app/screens/start"; //Importing Screen view

//Mount the App, this is where everything starts when up
export default function App() {
  //App returns a view that was imported, then the screen renders the class
  return <Start />;
}
