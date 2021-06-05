import NavBar from 'components/NavBar/NavBar.component';
import Footer from 'components/Footer/Footer.component';
import DataTable from 'components/DataTable/DataTable.component';

function App () {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Home</h1>

        <DataTable />
      </div>
      <Footer />
    </>
  )
}

export default App
