import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Header } from '../../components/Header';
import { LabelAndChange } from '../../components/LabelAndChange';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';

import { Pessoa } from '../../service/models/Pessoa';
import PessoaController from '../../service/controllers/PessoaController';

import './styles.scss'

type PessoaParams = {
  id: string;
}

export function RegisterAndEditPessoas() {
  const navigate = useNavigate();
  const params = useParams<PessoaParams>();

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [rg, setRg] = useState('');
  const [cidade_id, setCidade_id] = useState('');
  const [tipo_id, setTipo_id] = useState('');
  
  const [alertFullFields, setAlertFullFields] = useState(false);
  const [alertRegistered, setAlertRegistered] = useState(false);
  const [alertEdited, setAlertEdited] = useState(false);

  useEffect(() => {
    if(params.id){
      PessoaController.show(params.id).then((dados) => {
        if (dados) {
          setId(dados._id || '');
          setNome(dados.nome || '');
          setRua(dados.rua || '');
          setNumero(dados.numero || '');
          setComplemento(dados.complemento || '');
          setRg(dados.rg || '');
          setCidade_id(dados.cidade_id || '');
          setTipo_id(dados.tipo_id || '');
        }
        else{
          navigate('/pessoas');
        }
      });
    }
  },[params, navigate]);

  function handleChangePessoa(){
    
    if(id !== '' && nome !== '' && rua !== '' && 
      numero !== '' && complemento !== '' && rg !== '' 
      && cidade_id !== '' && tipo_id !== '') {
        
      const pessoa: Pessoa = {
        _id: id,
        nome,
        rua,
        numero,
        complemento,
        rg,
        cidade_id,
        tipo_id,
      }

      if(params.id) {
        pessoa._id = params.id;
        PessoaController.update(pessoa).then(() => {
          setAlertEdited(true);
        });
      }
      else {
        PessoaController.create(pessoa).then(() => {
          setAlertRegistered(true);
        });
      }
    }
    else{
      setAlertFullFields(true);
    }
  }

  return(
    <div id="register-and-edit-pessoa" >
      <Header title={params.id ? "Editar Pessoa" : "Nova Pessoa"}/>
      
      <main>
        <div className="board">
          <form>
            <div className="Infos">

              <div>
                <LabelAndChange
                  input 
                  name="ID"
                  type="text" 
                  onChange={event => setId(event.target.value)}
                  placeholder="Digite o ID da pessoa..."
                  value={id !== '' ? id : undefined}
                />

                <LabelAndChange
                  input 
                  name="Nome"
                  type="text" 
                  onChange={event => setNome(event.target.value)}
                  placeholder="Digite o nome da pessoa..."
                  value={nome !== '' ? nome : undefined}
                />
              </div>

              <div>
                <LabelAndChange
                  input 
                  name="Rua"
                  type="text" 
                  onChange={event => setRua(event.target.value)}
                  placeholder="Digite a rua da casa da pessoa..."
                  value={rua !== '' ? rua : undefined}
                />

                <LabelAndChange
                  input 
                  name="Numero"
                  type="text" 
                  onChange={event => setNumero(event.target.value)}
                  placeholder="Digite o número da casa da pessoa..."
                  value={numero !== '' ? numero : undefined}
                />
              </div>
            
            </div>
            
            <div className="Infos">

              <div>
                <LabelAndChange
                  input 
                  name="Complemento"
                  type="text" 
                  onChange={event => setComplemento(event.target.value)}
                  placeholder="Digite o complemento da casa da pessoa..."
                  value={complemento !== '' ? complemento : undefined}
                />

                <LabelAndChange
                  input 
                  name="RG"
                  type="text" 
                  onChange={event => setRg(event.target.value)}
                  placeholder="Digite o RG do pessoa..."
                  value={rg !== '' ? rg : undefined}
                />
              </div>

              <div>
                <LabelAndChange
                  input 
                  name="ID da Cidade"
                  type="text" 
                  onChange={event => setCidade_id(event.target.value)}
                  placeholder="Digite o ID da cidade da pessoa..."
                  value={cidade_id !== '' ? cidade_id : undefined}
                />

                <LabelAndChange
                  input 
                  name="ID do Tipo Sanguineo"
                  type="text" 
                  onChange={event => setTipo_id(event.target.value)}
                  placeholder="Digite o ID do tipo Sanguineo do pessoa..."
                  value={tipo_id !== '' ? tipo_id : undefined}
                />
              </div>
    
            </div>
          </form>
        </div>
        <Button onClick={handleChangePessoa}>{params.id ? "Salvar Alterações" : "Cadastrar Pessoa"}</Button>
      </main>

      {alertFullFields ? 
        <Modal 
          alert 
          title="Alerta ao cadastrar pessoa" 
          handleToCancel={() => {setAlertFullFields(false)}}
        >
          Preencha todos os campos!
        </Modal> 
      : false}

      {alertRegistered ? 
        <Modal 
          alert 
          title="Pessoa Cadastrado"
          handleToCancel={() => {
            setAlertRegistered(false); 
            navigate('/pessoas');
          }}
        >
          {`Pessoa ${nome} cadastrado com sucesso!`}
        </Modal> 
      : false}

      {alertEdited ? 
        <Modal 
          alert 
          title="Pessoa Editado"
          handleToCancel={() => {
            setAlertEdited(false);
            navigate('/pessoas');
          }}
        >
          {`Pessoa ${nome} editado com sucesso!!!`}
        </Modal> 
      : false}
    </div>
  );
}
