const Todo = require('../database/schema/todo.schema');

const addTodo = async (req, res, next) => {
	const { body } = req;

	const doc = await Todo.create({
		title: body.title,
		value: body.value,
	});

	res.status(200).json({
		status: 'Success',
		data: doc,
		message: 'Todo added successfully',
	});
	next();
};

// * module export
module.exports = {
	addTodo,
};
