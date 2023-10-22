import { StyledButtonCreateContact } from '../../components/Buttons/style'
import Header from '../../components/Header'
import { ContactList } from '../../containers/Contato'

const Home = () => (
  <>
    <Header title="Meus Contatos" />
    <main className="container">
      <ContactList />
    </main>
    <footer>
      <div className="container">
        <StyledButtonCreateContact to={'/novo'}>Novo</StyledButtonCreateContact>
      </div>
    </footer>
  </>
)

export default Home
