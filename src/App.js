import "./App.css";
import { columns, data } from "./components/table/Data";
import Table from "./components/table/Table";
import Form from "./pages/Form";

function App() {
  return (
    <div>
      <Form />
      <Form />
      <Table data={data} columns={columns} />
      <Table data={data} columns={columns} />
    </div>
  );
}

export default App;
