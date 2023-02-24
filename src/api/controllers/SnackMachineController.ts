import {Request, Response} from "express";
import {BaseController} from "./BaseController";
import {inject} from "inversify";
import {TYPES} from "../../config/types";
import {InsertCoinInteractor} from "../../app/interactors/InsertCoinInteractor";
import {MoneyUnit} from "../../domain/Money";
import { validationResult } from 'express-validator';

export class SnackMachineController extends BaseController {

    @inject(TYPES.InsertCoinInteractor)
    insertCoinInteractor: InsertCoinInteractor;

    async index(req: Request, res: Response) {
        this.insertCoinInteractor.insertCoin(MoneyUnit.FIVE_DOLLAR, "ID")
        res.status(200).send({"message": "Hello"});
    }

    async insertCoin(req: Request, res: Response) {

    }
}