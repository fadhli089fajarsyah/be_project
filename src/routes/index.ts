import * as express from "express";
import UserControllers from "../controllers/UserControllers";
import paslon from "../controllers/paslon";
import beritaControllers from "../controllers/berita.Controllers";


const Route = express.Router()
//menampilkan data
Route.get("/users", UserControllers.find)
Route.get("/paslonAdds",paslon.find )
Route.get("/beritas",beritaControllers.find )

// buat menambah data
Route.post("/user", UserControllers.create)
Route.post("/paslonAdd", paslon.create)
Route.post("/beritaAdd", beritaControllers.create)

export default Route