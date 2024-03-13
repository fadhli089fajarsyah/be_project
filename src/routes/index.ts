import * as express from "express";
import UserControllers from "../controllers/UserControllers";
import paslon from "../controllers/paslon";
import beritaControllers from "../controllers/beritaControllers";
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

// delete
Route.delete("/delete_berita/:id_berita", beritaControllers.delete)
Route.delete("/delete_partai/:id_partai", partaiControllers.delete)
Route.delete("/delete_paslon/:id_paslon", paslon.delete)

//edit
Route.put("/berita_edit/:id_berita", beritaControllers.edit)
Route.put("/partai_edit/:id_partai", partaiControllers.edit)

export default Route