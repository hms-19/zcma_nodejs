

const index = async (req, res) => {
    // we will do logic for return all users in this function
    const users = [
        {
            id: 1,
            name: "Soe"
        },
        {
            id: 2,
            name: "Chi"
        }
    ];


    res.send({
        result: true,
        data: users
    })
}

const create = async (req, res) => {
    
    res.send({
        result: true,
    })
}

const show = async (req, res) => {
    res.send({
        result: true,
    })
}

const update = async (req, res) => {
    res.send({
        result: true,
    })
}

const destroy = async (req, res) => {
    res.send({
        result: true,
    })
}

module.exports = {
    index,
    create,
    show,
    update,
    destroy
}