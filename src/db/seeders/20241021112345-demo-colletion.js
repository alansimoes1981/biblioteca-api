"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Collections",
			[
				{
					id: "8f8c6f08-769f-4b35-9c8c-24b0495f64a2",
					title: "The Great Gatsby",
					ISBN: "9780743273565",
					publish_year: "1925",
					language: "English",
					publishing_company: "Charles Scribner's Sons",
					quantity: 5,
					cover_image:
						"https://cdn.kobo.com/book-images/56c72420-b675-41f2-8f1e-2049dcd0d626/353/569/90/False/o-grande-gatsby-17.jpg",
					status: true,
					location: "Aisle 3, Shelf B",
					page_number: 180,
					author: "F. Scott Fitzgerald",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: "9b5a3c71-4b6c-4c79-a1a9-2f45d7b8f8d4",
					title: "To Kill a Mockingbird",
					ISBN: "9780060935467",
					publish_year: "1960",
					language: "English",
					publishing_company: "J.B. Lippincott & Co.",
					quantity: 8,
					cover_image:
						"https://images-na.ssl-images-amazon.com/images/I/81OtwZ2ixhL.jpg",
					status: true,
					location: "Aisle 1, Shelf A",
					page_number: 281,
					author: "Harper Lee",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: "b8b43b10-7b1e-45a3-9ecb-16bda5cbb8db",
					title: "1984",
					ISBN: "9780451524935",
					publish_year: "1949",
					language: "English",
					publishing_company: "Secker & Warburg",
					quantity: 6,
					cover_image:
						"https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg",
					status: true,
					location: "Aisle 2, Shelf C",
					page_number: 328,
					author: "George Orwell",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: "5cfb4764-9b9d-4a79-8338-2a9d1c637d68",
					title: "Pride and Prejudice",
					ISBN: "9780141040349",
					publish_year: "1813",
					language: "English",
					publishing_company: "T. Egerton",
					quantity: 10,
					cover_image:
						"https://images-na.ssl-images-amazon.com/images/I/81A-mvlo+QL.jpg",
					status: true,
					location: "Aisle 4, Shelf D",
					page_number: 279,
					author: "Jane Austen",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: "3a6935ec-e1bf-4f9c-8a42-67cba6a8b67c",
					title: "Moby-Dick",
					ISBN: "9781503280786",
					publish_year: "1851",
					language: "English",
					publishing_company: "Harper & Brothers",
					quantity: 4,
					cover_image:
						"https://images-na.ssl-images-amazon.com/images/I/91c8N2dbq7L.jpg",
					status: true,
					location: "Aisle 5, Shelf A",
					page_number: 635,
					author: "Herman Melville",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Collections", null, {});
	},
};
