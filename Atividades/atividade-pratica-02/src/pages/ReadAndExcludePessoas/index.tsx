import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { PageCRUD } from '../../components/PageCRUD';
import { Row } from '../../hooks/useTable';
import { Modal } from '../../components/Modal';

import PessoaController from '../../service/controllers/PessoaController';

export function ReadAndExcludePessoa() {
  const navigate = useNavigate();
  const [rowsSelected, setRowsSelected] = useState<Row[]>([]);

  const [justOnePessoa, setJustOnePessoa] = useState(false);
  const [selectOnePessoa, setSelectOnePessoa] = useState(false);
  const [selectMorePessoa, setSelectMorePessoa] = useState(false);
  const [confirmExcludedPessoa, setConfirmExcludedPessoa] = useState(false);
  const [excludedPessoa, setExcludedPessoa] = useState(false);

  async function handleToNewPessoa() {
    navigate('/create/pessoa');
  }
  
  async function handleToEditPessoa() {
    if(rowsSelected.length > 1){
      setJustOnePessoa(true);
      return
    }
    if(rowsSelected.length < 1){
      setSelectOnePessoa(true);
      return
    }
    navigate(`/edit/pessoa/${rowsSelected[0]._id}`);
  }

  async function handleToRemovePessoa() {
    if(rowsSelected.length < 1){
      setSelectMorePessoa(true);
      return
    }
    setConfirmExcludedPessoa(true);
  }

  async function handleToVaccine() {
    if(rowsSelected.length > 1){
      setJustOnePessoa(true);
      return
    }
    if(rowsSelected.length < 1){
      setSelectOnePessoa(true);
      return
    }
    navigate(`/vaccine/pessoa/${rowsSelected[0]._id}`);
  }

  return(
    <div>
      <Header title="Pessoas"/>

      <PageCRUD 
        title="pessoas"
        handleToNew={handleToNewPessoa}
        handleToEdit={handleToEditPessoa}
        handleToRemove={handleToRemovePessoa}
        setRowsSelected={setRowsSelected}
        handleToVaccine={handleToVaccine}
      />

      {justOnePessoa ? 
        <Modal 
          alert 
          title="Alerta ao editar pessoa" 
          handleToCancel={() => {setJustOnePessoa(false)}}
        >
          Não é possível editar ou ver vacinas de mais de um pessoa por vez.
        </Modal> 
      : false}

      {selectOnePessoa ? 
        <Modal 
          alert 
          title="Alerta ao editar pessoa" 
          handleToCancel={() => {setSelectOnePessoa(false)}}
        >
          Selecione um pessoa para editar ou ver suas vacinas.
        </Modal> 
      : false}

      {selectMorePessoa ? 
        <Modal 
          alert 
          title="Alerta ao excluir pessoa" 
          handleToCancel={() => {setSelectMorePessoa(false)}}
        >
          Selecione um ou mais pessoas para excluir.
        </Modal> 
      : false}

      {confirmExcludedPessoa ? 
        <Modal 
          confirm 
          title="Alerta ao excluir pessoa" 
          handleToCancel={() => {setConfirmExcludedPessoa(false)}}
          handleToConfirm={() => {
            setConfirmExcludedPessoa(false);
            PessoaController.delete(rowsSelected).then(() => {
              setExcludedPessoa(true);
            });
          }}
        >
          {`Deseja excluir o(s) pessoa(s) ${rowsSelected.map(e => ' '+e.nome)} ?`}
        </Modal> 
      : false}

      {excludedPessoa ? 
        <Modal 
          alert 
          title="Alerta ao excluir pessoa" 
          handleToCancel={() => {
            window.location.reload();
            setExcludedPessoa(false)
          }}
        >
          pessoa(s) excluído(s) com sucesso!
        </Modal> 
      : false}
    </div>
  );
}