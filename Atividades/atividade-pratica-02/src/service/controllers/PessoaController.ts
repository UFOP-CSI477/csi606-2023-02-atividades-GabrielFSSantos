import axios from 'axios';
import { Row } from '../../hooks/useTable';
import { Pessoa } from '../models/Pessoa';

const PessoaController = {

  async create(pessoa: Pessoa) {
    try {
      let res: Pessoa = {};

      await axios({
        method: 'POST',
        url: 'http://localhost:3333/pessoas/create',
        data: pessoa
      }).then(response => {
        res = response.data
      });

      return res;
    }catch (error) {
      console.log("error Pessoa Exists");
   }
  },

  async read() {
    try {
      let pessoas: Row[] = []

      await axios({
        method: 'GET',
        url: 'http://localhost:3333/pessoas/read',
      }).then(response => {
        pessoas = response.data;
      });
      return pessoas;

    } catch (error) {
      console.log("Could not list.\n" + error);
    }
  },
  
  async update(pessoa: Pessoa) {
    try {
      let res: Pessoa = {}

      await axios({
        method: 'PUT',
        url: 'http://localhost:3333/pessoas/update',
        data: pessoa
      }).then(response => {
        res = response.data;
      });
      return res;
      
    } catch (error) {
      console.log("Could not update.\n" + error);
    }
  },
  
  async delete(elements: Pessoa[]) {
    try {
        await axios({
          method: 'DELETE',
          url: 'http://localhost:3333/pessoas/delete',
          data: elements
        }).then(response => {
          return true;
        });
    } catch (error) {
      alert("don't was not possible to delete.\n" + error);
    }
  },

  async show(id: string) {
    try {
      let res: Pessoa = {}

      await axios({
        method: 'GET',
        url: `http://localhost:3333/pessoas/show/${id}`,
      }).then(response => {
        res = response.data;
      });
      return res;

    } catch (error) {
      console.log("Could not show.\n" + error);
    }
  }
}

export default PessoaController;