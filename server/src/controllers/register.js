const prisma = require("../database");

module.exports = {
    async read(req, res) {
        try {
            const { id } = req.query;
        
            if (id) {
                const student = await prisma.register.findUnique({where: {id: Number(id)}});
                if(!student) return res.status(400).json("Cadastro não encontrado!");

                return res.json(student)
            } else {
                const students = await prisma.register.findMany();
                return res.json(students)
            }
        } catch (error) {
            console.log(error);
        }
    },

    async create(req, res) {
        try {
            const { name, email, password } = req.body;
            if (!name || !email || !password || name === "" || email === "" || password === "") {
                res.json("Por favor, preencha todos os dados!")
            }

            const registerEmail = await prisma.register.findUnique({where: {email}})
            if (registerEmail) return res.status(400).json("Email já está em uso!")
            
            await prisma.register.create({data: {name, email, password}})
            return res.json("Você foi cadastrado com sucesso");
        } catch (error) {
            console.log(error);
        }
    }
}