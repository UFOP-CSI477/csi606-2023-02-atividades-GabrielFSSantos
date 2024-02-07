const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {

	const { tipo, fator} = req.body; 

	const newTipoSanguineo = {
		tipo, 
		fator,
	}

	const tipoSanguineo = await prisma.tipoSanguineo.create({
		data: newTipoSanguineo,
	});

	res.status(200).send({
		tipoSanguineo
	});
}

const read = async (req, res) => {

	const allTipoSanguineo = await prisma.tipoSanguineo.findMany();

	res.status(200).send({
		allTipoSanguineo
	});
}

const update = async (req, res) => {

	const tipoSanguineoId = req.body.id;
	delete req.body.id

	const updatedTipoSanguineo = await prisma.tipoSanguineo.update({
	  where: { id: tipoSanguineoId},
	  data: req.body
	});

	res.status(200).send({
		updatedTipoSanguineo
	});
}

const delet = async (req, res) => {
	const tipoSanguineoId = req.body.id;

	await prisma.tipoSanguineo.delete({
	  where: { id: tipoSanguineoId},
	});

	res.status(200).send({
		message: "TipoSanguineo Deletada."
	});
}

module.exports = { create, read, update, delet };