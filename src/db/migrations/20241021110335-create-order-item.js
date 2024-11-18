"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("OrderItems", {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
			},
			collection_id: {
				allowNull: false,
				type: Sequelize.UUID,
				references: {
					model: "Collections",
					key: "id",
				},
				onDelete: "CASCADE",
			},
			student_id: {
				allowNull: false,
				type: Sequelize.UUID,
				references: {
					model: "Students",
					key: "id",
				},
				onDelete: "CASCADE",
			},
			status: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			devolution_date: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("OrderItems");
	},
};
