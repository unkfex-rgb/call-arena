export default function Home() {

  const latest = [
    {name:'corintiafps', value:'R$10'},
    {name:'nzaotv', value:'R$25'},
    {name:'luizin7', value:'R$5'},
    {name:'pedrobet', value:'R$50'},
  ]

  const top = [
    {name:'corintiafps', value:'R$250'},
    {name:'nzaotv', value:'R$120'},
    {name:'felpszx', value:'R$95'},
  ]

  return (
    <div className='page'>

      <header className='header'>
        <div className='container header-inner'>
          <div className='logo'>
            CALL <span className='orange'>ARENA</span>
          </div>

          <div style={{color:'#ffcc00', fontWeight:'700'}}>
  🎰 comunidade premium
</div>
        </div>
      </header>

      <main className='container hero'>

        <section className='card'>

          <div className='badge'>
            🎰 calls abertas agora
          </div>

          <h1 className='title'>
            envie sua <span className='orange'>call</span>
          </h1>

          <p className='sub'>
            mande sua call do casino e seja redirecionado para o PixGG.
          </p>

          <input className='input' placeholder='Seu nick da Twitch' />

          <div className='grid2'>
            <input className='input' placeholder='Valor da call' />
            <input className='input' placeholder='Sua chave PIX' />
          </div>

          <textarea placeholder='Qual call voce quer passar?' />

          <input className='input' placeholder='Mensagem opcional' />

          <a
            href='https://pixgg.com/Nzaotv'
            target='_blank'
            className='btn'
            style={{width:'100%', textAlign:'center', marginTop:'10px'}}
          >
            ENVIAR CALL
          </a>

          <div className='stats'>

            <div className='stat'>
              <p>calls enviadas</p>
              <h3>1.482</h3>
            </div>

            <div className='stat'>
              <p>donates hoje</p>
              <h3>R$12K</h3>
            </div>

          </div>

        </section>

        <aside style={{display:'flex', flexDirection:'column', gap:'22px'}}>

          <div className='card'>
            <h2 className='side-title'>
              🔥 ultimos pagamentos
            </h2>

            <div className='list'>
              {latest.map((item, index) => (
                <div key={index} className='item'>
                  <span>{item.name}</span>
                  <span className='value'>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='card'>
            <h2 className='side-title'>
              🏆 top donates
            </h2>

            <div className='list'>
              {top.map((item, index) => (
                <div key={index} className='item'>
                  <span>{index + 1}. {item.name}</span>
                  <span className='value'>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

        </aside>

      </main>

      <div className='live'>
        🔥 corintiafps acabou de enviar R$15
      </div>

    </div>
  )
}
