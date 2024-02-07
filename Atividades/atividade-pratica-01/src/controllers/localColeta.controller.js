const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {

	const { nome, rua, numero, complemento, cidade_id } = req.body; 

	const newLocalColeta = {
		nome, 
		rua, 
		numero, 
		complemento, 
		cidade_id
	}

	const localColeta = await prisma.localColeta.create({
		data: newLocalColeta,
	});

	res.status(200).send({
		localColeta
	});
}

const read = async (req, res) => {

	const allLocalColeta = await prisma.localColeta.findMany();

	res.status(200).send({
		allLocalColeta
	});
}

const update = async (req, res) => {

	const localColetaId = req.body.id;
	delete req.body.id

	const updatedLocalColeta = await prisma.localColeta.update({
	  where: { id: localColetaId},
	  data: req.body
	});

	res.status(200).send({
		updatedLocalColeta
	});
}

const delet = async (req, res) => {
	const localColetaId = req.body.id;

	await prisma.localColeta.delete({
	  where: { id: localColetaId},
	});

	res.status(200).send({
		message: "LocalColeta Deletada."
	});
}

module.exports = { create, read, update, delet };