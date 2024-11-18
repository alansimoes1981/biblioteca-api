import { NextFunction, Request, Response } from "express";
import Helper from "../../helpers/responseData";
import CollectionsService from "../../services/collectionsService";
import { v4 } from "uuid";
import { ICollectionInput, ICollectionInputUpdate } from "types/ICollections";

const collectionsService = new CollectionsService();

class CollectionsController {
	static async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const allCollections = await collectionsService.getAll();

			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, allCollections));
		} catch (error) {
			next(error);
		}
	}

	static async getByStatus(req: Request, res: Response, next: NextFunction) {
		const { status } = req.params;

		try {
			const collectionsActives = await collectionsService.getByStatus(status);
			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, collectionsActives));
		} catch (error) {
			next(error);
		}
	}

	static async getByTitleOrAuthor(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		const { search } = req.params;

		try {
			const collectionsByTitleOrAuthor =
				await collectionsService.getByTitleOrAuthor(search);

			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, collectionsByTitleOrAuthor));
		} catch (error) {
			next(error);
		}
	}

	static async getOne(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			const collection = await collectionsService.findOne(id);
			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, collection));
		} catch (error) {
			next(error);
		}
	}

	static async create(req: Request, res: Response, next: NextFunction) {
		try {
			const id = v4();

			const body: ICollectionInput = {
				id,
				title: req.body.title,
				ISBN: req.body.ISBN,
				publish_year: req.body.publish_year,
				language: req.body.language,
				publishing_company: req.body.publishing_company,
				quantity: req.body.quantity,
				cover_image: req.body.cover_image,
				status: req.body.status,
				location: req.body.location,
				page_number: req.body.page_number,
				author: req.body.author,
			};

			const collectionCreated = await collectionsService.create(body);

			return res
				.status(201)
				.send(Helper.ResponseData(201, null, null, collectionCreated));
		} catch (error) {
			next(error);
		}
	}

	static async update(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			const dto: ICollectionInputUpdate = {
				title: req.body.title,
				ISBN: req.body.ISBN,
				publish_year: req.body.publish_year,
				language: req.body.language,
				publishing_company: req.body.publishing_company,
				quantity: req.body.quantity,
				cover_image: req.body.cover_image,
				status: req.body.status,
				location: req.body.location,
				page_number: req.body.page_number,
				author: req.body.author,
			};

			await collectionsService.update({ dto, id });

			const collectionUpdated = await collectionsService.findOne(id);

			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, collectionUpdated));
		} catch (error) {
			next(error);
		}
	}

	static async updateStatus(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			await collectionsService.updateStatus({ status: req.body.status }, id);

			const collectionUpdated = await collectionsService.findOne(id);

			return res
				.status(200)
				.send(Helper.ResponseData(200, null, null, collectionUpdated));
		} catch (error) {
			next(error);
		}
	}

	static async delete(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		try {
			await collectionsService.delete(id);
			return res.status(204).send(Helper.ResponseData(200, null, null, null));
		} catch (error) {
			next(error);
		}
	}
}

export default CollectionsController;
