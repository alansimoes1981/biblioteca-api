"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Collections", {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			ISBN: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			publish_year: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			language: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			publishing_company: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			quantity: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			cover_image: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			status: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			location: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			page_number: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			author: {
				allowNull: false,
				type: Sequelize.STRING,
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
		await queryInterface.dropTable("Collections");
	},
};
