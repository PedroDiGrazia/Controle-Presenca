function Login (){
    return(
        <div className='AreaTexto'>
            <h1 id='Msg-BemVindo'>Central de Cadastro ✏️</h1>
            <h2 className='emoji'>🧑‍🦰</h2>
            <h2 className='Txt1'>Nome:</h2>
            <br/>
            <input className='btnTxt' placeholder='Nome'/>
            <br/>
            <h2 className='emoji'>📩</h2>
            <h2 className='Txt2'>E-mail:</h2>
            <br/>
            <input className='btnTxt' type='email' placeholder='E-mail'/>
            <h2 className='materia'>Selecione a sua matéria:</h2>
            <input className='cursobtn' type='checkbox'></input>
            <h3 className='curso'>Engenharia da computação</h3>
            <br/>
            <input className='btnEnvio' type='submit'></input>
      </div>
    )
}
export default Login