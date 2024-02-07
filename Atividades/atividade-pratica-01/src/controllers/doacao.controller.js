const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {

	const { pessoa_id, local_id, data } = req.body; 

	const newDoacao = {
		pessoa_id, 
		local_id, 
		data
	}

	const doacao = await prisma.doacao.create({
		data: newDoacao,
	});

	res.status(200).send({
		doacao
	});
}

const read = async (req, res) => {

	const allDoacao = await prisma.doacao.findMany();

	res.status(200).send({
		allDoacao
	});
}

const update = async (req, res) => {

	const doacaoId = req.body.id;
	delete req.body.id

	const updatedDoacao = await prisma.doacao.update({
	  where: { id: doacaoId},
	  data: req.body
	});

	res.status(200).send({
		updatedDoacao
	});
}

const delet = async (req, res) => {
	const doacaoId = req.body.id;

	await prisma.doacao.delete({
	  where: { id: doacaoId},
	});

	res.status(200).send({
		message: "Doacao Deletada."
	});
}

module.exports = { create, read, update, delet };