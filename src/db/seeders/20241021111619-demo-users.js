"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Users",
			[
				{
					id: "b3090b70-0401-4ec3-8170-499d083a565d",
					name: "José Silva",
					password_hash: "6f53f4ae-bc12-4890-ab42-70b0d3ebad17",
					school: "E.M Professora Nilce de Almeida Muniz",
					telephone: "Telefone",
					email: "jose@gmail.com",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Users", null, {});
	},
};
