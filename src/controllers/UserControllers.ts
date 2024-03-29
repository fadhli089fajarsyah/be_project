// Controllers for logical system application

import { Request, Response } from "express";
import UserServices from "../services/UserServices";
import { userVald } from "../validator/userValidator";

export default new class UserControllers {
  async create(req: Request, res: Response) : Promise<Response> {
    try {
      const data = req.body

      const {error, value} = userVald.validate(data)
			if(error) return res.status(400).json({message: error.details[0].message})

      const user = await UserServices.create(data)

      return res.status(201).json(user)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  async find(req: Request, res: Response) : Promise<Response> {
    try {
      const users = await UserServices.find()

      return res.status(200).json(users)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
}