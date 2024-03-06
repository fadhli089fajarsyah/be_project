import * as express from "express";
import UserControllers from "../controllers/UserControllers";
import paslon from "../controllers/paslon";
import beritaControllers from "../controllers/berita.Controllers";
import partaiControllers from "../controllers/partaiControllers";


const Route = express.Router()
//menampilkan data
Route.get("/users", UserControllers.find)
Route.get("/paslonAdds",paslon.find )
Route.get("/beritas",beritaControllers.find )
Route.get("/partais",partaiControllers.find )

// buat menambah data
Route.post("/user", UserControllers.create)
Route.post("/paslonAdd", paslon.create)
Route.post("/berita_Add", beritaControllers.create)
Route.post("/partaiAdd", partaiControllers.create)

export default Route