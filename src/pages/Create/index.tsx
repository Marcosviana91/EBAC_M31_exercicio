import Header from '../../components/Header'
import { CreateContact } from '../../containers/NovoContato'

const Create = () => (
  <>
    <Header title="Novo Contato" />
    <div className="container">
      <main>
        <CreateContact />
      </main>
    </div>
  </>
)

export default Create
