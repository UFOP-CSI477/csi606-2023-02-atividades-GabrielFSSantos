const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {

	const { nome, rua, numero, complemento, rg, cidade_id, tipo_id } = req.body; 

	const newPessoa = {
		nome, 
		rua, 
		numero, 
		complemento, 
		rg, 
		cidade_id, 
		tipo_id
	}

	const pessoa = await prisma.pessoa.create({
		data: newPessoa,
	});

	res.status(200).send({
		pessoa
	});
}

const read = async (req, res) => {

	const allPessoa = await prisma.pessoa.findMany();

	res.status(200).send({
		allPessoa
	});
}

const update = async (req, res) => {

	const pessoaId = req.body.id;
	delete req.body.id

	const updatedPessoa = await prisma.pessoa.update({
	  where: { id: pessoaId},
	  data: req.body
	});

	res.status(200).send({
		updatedPessoa
	});
}

const delet = async (req, res) => {
	const pessoaId = req.body.id;

	await prisma.pessoa.delete({
	  where: { id: pessoaId},
	});

	res.status(200).send({
		message: "Pessoa Deletada."
	});
}

module.exports = { create, read, update, delet };