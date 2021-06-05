import NavBar from 'components/NavBar/NavBar.component'
import Footer from 'components/Footer/Footer.component'
import DataTable from 'components/DataTable/DataTable.component'
import BarChart from 'components/BarChart/BarChart.component'
import DonutChart from 'components/DonutChart/DonutChart.component';

function App () {
  return (
    <>
      <NavBar />
      <div className='container'>
        <h1 className='text-primary py-4'>Dashboard</h1>

        <div className='row px-3'>
          <div className='col-sm-6'>
            <h3 className='text-center text-secondary'>
              Taxa de conversão de vendas
            </h3>
            <BarChart />
          </div>
          <div className='col-sm-6'>
            <h3 className='text-center text-secondary'>Vendas</h3>
            <DonutChart />
          </div>
        </div>

        <div className='py-4'>
          <h2 className='text-center text-primary'>Listagem de vendas</h2>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  )
}

export default App
