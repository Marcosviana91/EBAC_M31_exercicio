import Header from '../../components/Header'
import { ContactList } from '../../containers/Contato'

const Home = () => (
  <>
    <Header title="Meus Contatos" />
    <div className="container">
      <main>
        <ContactList />
      </main>
    </div>
  </>
)

export default Home
