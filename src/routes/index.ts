import * as express from "express";
import UserControllers from "../controllers/UserControllers";
import paslonService from "../controllers/paslon";


const Route = express.Router()
//menampilkan data
Route.get("/users", UserControllers.find)
Route.get("/paslonAdds",paslonService.find )
Route.get("/beritas",paslonService.find )

// buat menambah data
Route.post("/user", UserControllers.create)
Route.post("/paslonAdd", paslonService.create)
Route.post("/beritasAdd", paslonService.create)

export default Route