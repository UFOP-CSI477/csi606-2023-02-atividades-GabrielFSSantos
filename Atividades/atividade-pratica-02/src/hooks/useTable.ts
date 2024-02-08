import { useEffect, useState } from 'react';
import { TableColumn } from 'react-data-table-component/dist/DataTable/types';
import PessoaController from '../service/controllers/PessoaController';

type TableProps = {
  type: string;
  search: string;
}

export type Row = { 
  _id?: string;
  nome?: string;
  rua?: string;
  numero?: string;
  complemento?: string;
  rg?: string;
  cidade_id?: string;
  tipo_id?: string;
}

export function useTable({type, search}: TableProps) {
  const [columns, setColumns] = useState<TableColumn<Row>[]>([]);
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    if(type === 'pessoas') {
      setColumns([
        { selector: row => '_id', name: 'ID', sortable: true, format: row => {return row._id ? row._id.toString() : ''}, maxWidth: "22rem"},
        { selector: row => 'nome', name: 'Nome', sortable: true, format: row => {return row.nome ? row.nome.toString() : ''}, maxWidth: "22rem"},
        { selector: row => 'rua', name: 'Rua', sortable: true, format: row => {return row.rua ? row.rua.toString() : ''}, maxWidth: "22rem"},
        { selector: row => 'numero', name: 'Numero', sortable: true, format: row => {return row.numero ? row.numero.toString() : ''}, maxWidth: "22rem"},
        { selector: row => 'complemento', name: 'Complemento', sortable: true, format: row => {return row.complemento ? row.complemento.toString() : ''}, maxWidth: "22rem"},
        { selector: row => 'rg', name: 'RG', sortable: true, format: row => {return row.rg ? row.rg.toString() : ''}, maxWidth: "22rem"},
        { selector: row => 'cidade_id', name: 'ID da cidade', sortable: true, format: row => {return row.cidade_id ? row.cidade_id.toString() : ''}, maxWidth: "22rem"},
        { selector: row => 'tipo_id', name: 'ID do Tipo Sanguineo', sortable: true, format: row => {return row.tipo_id ? row.tipo_id.toString() : ''}, maxWidth: "22rem"},
      ]);
      PessoaController.read().then((pessoas) => {
        if(pessoas){
          if(search.trim() === '') {
            setRows(pessoas);
          }
          else {
            setRows(pessoas.filter((pessoa) => {
              if(pessoa.nome){
                return pessoa.nome.toLowerCase().includes(search.toLowerCase());
              }
              else return false;
            }));
          }
        }
      });
    } 
    else if(type === 'doacoes') {
      
    }
    else if(type === 'locaisColeta') {
      
    }
    else if(type === 'tiposSanguineos') {
      
    }
  }, [type, search]);

  return {columns, rows};
}