import fotoPerfil from './fotoPerfil.jpg'
import './App.css'

function App() {
  return (
   <div>
    <header>
    <img src={fotoPerfil}></img>
    <h1>Ashley Souza</h1>
    </header>

    <main>
      <section>
        <h2>Objetivo: Busco minha primeira oportunidade profissional. 
        Tenho facilidade em aprender novas funções, foco em organização
        e grande motivação para aplicar meus conhecimentos teóricos e crescer juntos</h2>
      </section>
      <section>
        <h1>Dados para Contatos</h1>
        <h2>Ashley Souza</h2>
        <p>44 xxxxx-xxxx</p>
        <p>E-mail:ashley.raimuno.souza@escola.pr.gov.br</p>
        <p>Linkdin: xxxxxxxx</p>
        <p>GitHub: xxxx</p>
      </section>

      <section>
        <h1>Formação</h1>
        <div>
          <article>
            <h2>Ensino Médio Profissionalizante em Desenvolvimento de Sistemas</h2>
            <p>Instituição: Colégio Estadual Santa Maria Goretti</p>
            <p>Ano de Conclusão: 2027</p>
          </article>

          <article>
            <h2>Informatica</h2>
            <p>Instituição: CEBRAC</p>
            <p>Ano de Conclusão: Concluido</p>
          </article>
        </div>
      </section>

      <section>
        <h1>Experiência Profissional</h1>
        <div>
          <article>
            <h2>Empresa:McDonald's</h2>
            <p>Função/Cargo:Atendente de Caixa</p>
            <p>Período:30 dias</p>
          </article>

          <article>
            <h2>Empresa:PetShop</h2>
            <p>Função/Cargo:Atendente de Caixa</p>
            <p>Período:2 meses</p>
          </article>
        </div>
      </section>
    </main>

    <footer>
      <div>Desenvolvido por Ashley Souza</div>
    </footer>
   </div>
  );
}

export default App;
