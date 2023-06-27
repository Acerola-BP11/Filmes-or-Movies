const { isNil } = require('lodash')
const Filme = require('../model/filme')

module.exports = {
    listFilmes: async (_, res) => {
        const listaFilmes = await Filme.findAll()
        return res.status(200).json(listaFilmes)
    },
    getFilme: async (req, res) => {
        const id = req.params.id
        const filme = await Filme.findByPk(id)
        if(isNil(filme)){
            return await res.status(200).send('O id inserido não existe no banco')
        }else{
            return await res.status(200).json(filme)
        }
    },
    newFilme: async (req, res) => {
        const body = req.body
        if(isNil(body.nome) || isNil(body.diretor)){
            return await res.status(200).send(`
            O Padrão de envio deve respeitar o modelo:
            nome: nome
            diretor: diretor
            `)
        }else{
            await Filme.create(body)
            return await res.status(200).send('Filme cadastrado com sucesso!')
        }
    },
        editFilme: async (req, res) => {
        const body = req.body
        if(isNil(body.id) || isNil(body.nome) || isNil(body.diretor)){
            return await res.status(200).send(`
            O Padrão de envio deve respeitar o modelo:
            id: id
            nome: nome
            diretor: diretor
            `)
        }else{
            await Filme.update({
                nome: body.nome,
                diretor: body.diretor
            },
            {
                where: {id: body.id}
            })
            return await res.status(200).send('Filme editado com sucesso!')
        }
    },
    deleteFilme: async (req, res) => {
        const body = req.body
        if(isNil(body.id)){
            return await res.status(200).send(`
            O Padrão de envio deve respeitar o modelo:
            id: id
            `)
        }else{
            await Filme.destroy({ where: {id: body.id} })
            return await res.status(200).send('Filme excluido com sucesso')
        }
    }

}