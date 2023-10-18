import Header from '../../components/Header'

const Create = () => (
  <>
    <Header title="Novo Contato" />
    <div className="container">
      <main>
        <form>
          <label>
            <h3>Nome:</h3>
            <input type="text" placeholder="Digite um nome..." />
          </label>
          <label>
            <h3>Telefone:</h3>
            <input
              id="telefone"
              type="tel"
              placeholder="Digite um telefone..."
            />
          </label>
          <label>
            <h3>E-mail:</h3>
            <input
              type="email"
              placeholder="Digite um endereço eletrônico..."
            />
          </label>
        </form>
      </main>
    </div>
  </>
)

export default Create
