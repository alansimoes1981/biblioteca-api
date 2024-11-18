"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"OrderItems",
			[
				{
					id: "e34c2d04-769f-4a35-8a6c-24b0496f45a5",
					collection_id: "8f8c6f08-769f-4b35-9c8c-24b0495f64a2",
					student_id: "c5090b70-0401-4ec3-8170-499d083a575e",
					devolution_date: new Date(),
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: "f12a3c45-7a2e-4b59-a8b7-29c0832a9f17",
					collection_id: "9b5a3c71-4b6c-4c79-a1a9-2f45d7b8f8d4",
					student_id: "d6d2a5b0-0df1-4dfc-9174-9b67dc11bcb4",
					devolution_date: new Date(),
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: "a9c3d4f8-8a2d-49c1-8723-36d093c3d6f8",
					collection_id: "b8b43b10-7b1e-45a3-9ecb-16bda5cbb8db",
					student_id: "b8d7c3c2-1a49-4398-865f-4e1b64881e3a",
					devolution_date: new Date(),
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: "b12f9c4d-3c4b-45f7-a0e6-58d703f8e7a1",
					collection_id: "5cfb4764-9b9d-4a79-8338-2a9d1c637d68",
					student_id: "de9385a7-5f7d-49f4-bc1a-7f1b9422f47e",
					devolution_date: new Date(),
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: "e7f2c7a6-5d5b-496d-8e7c-54d703f8f7e2",
					collection_id: "3a6935ec-e1bf-4f9c-8a42-67cba6a8b67c",
					student_id: "e6d2a5b7-4ed2-4b6c-846e-7d5b4924f8f1",
					devolution_date: new Date(),
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: "a4c9e7a5-5e7b-4f9d-92c4-64d604f8d5a3",
					collection_id: "8f8c6f08-769f-4b35-9c8c-24b0495f64a2",
					student_id: "f9a3c7c5-2ebd-4a34-867a-d5e21c8f63f3",
					devolution_date: new Date(),
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: "c3e2f8d4-7a5b-4c91-8437-34d093d5c9a7",
					collection_id: "9b5a3c71-4b6c-4c79-a1a9-2f45d7b8f8d4",
					student_id: "d7e4c7d2-5e82-439e-902a-0f12a4a973c3",
					devolution_date: new Date(),
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: "d2a6b5e9-4a1b-4a9c-8726-47f093f8c6a2",
					collection_id: "b8b43b10-7b1e-45a3-9ecb-16bda5cbb8db",
					student_id: "f5d3a4c7-3d92-40d6-8564-6f23ac1b8754",
					devolution_date: new Date(),
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: "c6b7d8a4-3e9b-4b8c-8032-47e193a4f7b6",
					collection_id: "5cfb4764-9b9d-4a79-8338-2a9d1c637d68",
					student_id: "c2d2a5b9-7de8-4a58-8467-f5e21d9e86f6",
					devolution_date: new Date(),
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("OrderItems", null, {});
	},
};
