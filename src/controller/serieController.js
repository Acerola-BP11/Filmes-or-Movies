const { isNil } = require('lodash')
const Serie = require('../model/serie')

module.exports = {
    listSeries: async (_, res) => {
        const listaSeries = await Serie.findAll()
        return res.status(200).json(listaSeries)
    },
    getSerie: async (req, res) => {
        const id = req.params.id
        const serie = await Serie.findByPk(id)
        if(isNil(serie)){
            return await res.status(200).send('O id inserido não existe no banco')
        }else{
            return await res.status(200).json(serie)
        }
    },
    newSerie: async (req, res) => {
        const body = req.body
        if(isNil(body.nome) || isNil(body.diretor) || isNil(body.episodios)){
            return await res.status(200).send(`
            O Padrão de envio deve respeitar o modelo:
            nome: nome
            diretor: diretor
            episodios: episodios
            `)
        }else{
            await Serie.create(body)
            return await res.status(200).send('Serie cadastrada com sucesso!')
        }
    },
        editSerie: async (req, res) => {
        const body = req.body
        if(isNil(body.id) || isNil(body.episodios) || isNil(body.nome) || isNil(body.diretor)){
            return await res.status(200).send(`
            O Padrão de envio deve respeitar o modelo:
            id: id
            nome: nome
            diretor: diretor
            episodios: episodios
            `)
        }else{
            await Serie.update({
                nome: body.nome,
                diretor: body.diretor,
                episodios: body.episodios
            },
            {
                where: {id: body.id}
            })
            return await res.status(200).send('Serie editada com sucesso!')
        }
    },
    deleteSerie: async (req, res) => {
        const body = req.body
        if(isNil(body.id)){
            return await res.status(200).send(`
            O Padrão de envio deve respeitar o modelo:
            id: id
            `)
        }else{
            await Serie.destroy({ where: {id: body.id} })
            return await res.status(200).send('Serie excluido com sucesso')
        }
    }

}