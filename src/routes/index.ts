import * as express from "express";
import UserControllers from "../controllers/UserControllers";
import paslon from "../controllers/paslon";
import beritaControllers from "../controllers/beritaControllers";
import partaiControllers from "../controllers/partaiControllers";


const Route = express.Router()
//menampilkan data
Route.get("/users", UserControllers.find)
Route.get("/paslons", paslon.find)
Route.get("/beritas", beritaControllers.find)
Route.get("/partais", partaiControllers.find)

// buat menambah data
Route.post("/useradd", UserControllers.create)
Route.post("/paslonAdd", paslon.create)
Route.post("/berita_Add", beritaControllers.create)
Route.post("/partaiAdd", partaiControllers.create)

// delete
Route.delete("/delete_berita/:id", beritaControllers.delete)
Route.delete("/delete_partai/:id", partaiControllers.delete)
Route.delete("/delete_paslon/:id", paslon.delete)

//edit
Route.put("/berita_edit/:id", beritaControllers.edit)
Route.put("/partai_edit/:id", partaiControllers.edit)
Route.put("/paslon_edit/:id", paslon.edit)

export default Route    