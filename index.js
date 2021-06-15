const express = require("express");
const app = express();
const db = require('./config/db.js');
const Donatur = require('./models').donatur;
const Donasi = require('./models').donasi;
const Penerima = require('./models').penerima;
const Penyaluran = require('./models').penyaluran;

app.get('/', (req, res)=> res.send('response berhasil'));
app.use(express.urlencoded({extended:true}));


db.authenticate().then(()=>
    console.log('berhasil konek')
);
app.listen(4500, ()=>{
    console.log("port berjalan di 5000");
})

//create donatur
app.post('/donatur', async (req, res)=> {
    try {
        const {id, nama, alamat, kontak, photo} = req.body;
        const newDonatur = new Donatur({
            id, nama, alamat, kontak, photo           
        })

        await newDonatur.save();
        res.json(newDonatur);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server errror');
    }
});

//get all donatur
app.get('/donatur', async (req, res)=>{
    try {
        const getAllDonatur = await Donatur.findAll({});
        res.json(getAllDonatur);

    } catch (err) {
        console.log(err.message);
    }
})

//get donatur by id
app.get('/donatur/:id_donatur', async (req, res)=>{
    try {
        const id = req.params.id_donatur
        const getDonatur = await Donatur.findOne({
            where : {id_donatur : id}
        })
        res.json(getDonatur)
    } catch (err) {
        console.log(err.message);
    }
})

//delete donatur by id
app.delete('/donatur/:id_donatur', async (req, res)=>{
    try {
        const id = req.params.id_donatur
        const deleteDonatur = await Donatur.destroy({
            where : {id_donatur :id}
        })
        await deleteDonatur
        res.json("berhasil dihapus")
    } catch (err) {
        console.log(err.message);
    }
})

//update donatur by id
app.put('/donatur/:id_donatur', async (req, res)=>{
    try {
        const {nama, alamat, kontak, photo} = req.body
        const id = req.params.id_donatur
        const updateDonatur = await Donatur.update({
            nama,
            alamat,
            kontak,
            photo
        },{
            where : {id_donatur : id}
        })

        await updateDonatur
        res.json("berhasil diupdate")
    } catch (err) {
        console.log(err.message)
    }
})


//===============================================
app.post('/donasi', async (req, res)=> {
    try {
        const {id, id_donatur, tanggal, jumlah, bukti} = req.body;
        const newDonasi = new Donasi({
            id, id_donatur,tanggal, jumlah, bukti
        })

        await newDonasi.save();
        res.json(newDonasi);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server errror');
    }
});

//get all donasi
app.get('/donasi', async (req, res)=>{
    try {
        const getAllDonasi = await Donasi.findAll({     
            include :  ['donatur'],
           });
        res.json(getAllDonasi);

    } catch (err) {
        console.log(err.message);
    }
})

//delete donasi by id
app.delete('/donasi/:id_donasi', async (req, res)=>{
    try {
        const id = req.params.id_donasi
        const deleteDonasi = await Donasi.destroy({
            where : {id_donasi :id}
        })
        await deleteDonasi
        res.json("berhasil dihapus")
    } catch (err) {
        console.log(err.message);
    }
})

//update donatur by id
app.put('/donasi/:id_donasi', async (req, res)=>{
    try {
        const {id_donatur, tanggal, jumlah, bukti} = req.body
        const id = req.params.id_donasi
        const updateDonasi = await Donasi.update({
            id_donatur,
            tanggal,
            jumlah,
            bukti
        },{
            where : {id_donasi : id}
        })

        await updateDonasi
        res.json("berhasil diupdate")
    } catch (err) {
        console.log(err.message)
    }
})


//===================================================

app.post('/penerima', async (req, res)=> {
    try {
        const {id, nama, alamat, kontak, } = req.body;
        const newPenerima = new Penerima({
            id, nama,alamat, kontak, 
        })

        await newPenerima.save();
        res.json(newPenerima);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server errror');
    }
});

//get all penerima
app.get('/penerima', async (req, res)=>{
    try {
        const getAllPenerima = await Penerima.findAll({});
        res.json(getAllPenerima);

    } catch (err) {
        console.log(err.message);
    }
})

//delete penerima by id
app.delete('/penerima/:id_penerima', async (req, res)=>{
    try {
        const id = req.params.id_penerima
        const deletePenerima = await Penerima.destroy({
            where : {id_penerima :id}
        })
        await deletePenerima
        res.json("berhasil dihapus")
    } catch (err) {
        console.log(err.message);
    }
})

//update penerima by id
app.put('/penerima/:id_penerima', async (req, res)=>{
    try {
        const {nama, alamat, kontak} = req.body
        const id = req.params.id_penerima
        const updatePenerima = await Penerima.update({
            nama,
            alamat,
            kontak
        },{
            where : {id_penerima : id}
        })

        await updatePenerima
        res.json("berhasil diupdate")
    } catch (err) {
        console.log(err.message)
    }
})


//===================================================

//===================================================

app.post('/penyaluran', async (req, res)=> {
    try {
        const {id_penerima, tanggal, jumlah, } = req.body;
        const newPenyaluran = new Penyaluran({
            id_penerima, tanggal,jumlah, 
        })

        await newPenyaluran.save();
        res.json(newPenyaluran);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server errror');
    }
});

//get all penyaluran
app.get('/penyaluran', async (req, res)=>{
    try {
        const getAllPenyaluran = await Penyaluran.findAll({
            include : ['penerima']
        });
        res.json(getAllPenyaluran);

    } catch (err) {
        console.log(err.message);
    }
})

//delete penerima by id
app.delete('/penyaluran/:id_penyaluran', async (req, res)=>{
    try {
        const id = req.params.id_penyaluran
        const deletePenyaluran = await Penyaluran.destroy({
            where : {id_penyaluran :id}
        })
        await deletePenyaluran
        res.json("berhasil dihapus")
    } catch (err) {
        console.log(err.message);
    }
})

//update penerima by id
app.put('/penyaluran/:id_penyaluran', async (req, res)=>{
    try {
        const {id_penyaluran, tanggal, jumlah} = req.body
        const id = req.params.id_penyaluran
        const updatePenyaluran = await Penyaluran.update({
            id_penyaluran,
            tanggal,
            jumlah
        },{
            where : {id_penyaluran : id}
        })

        await updatePenyaluran
        res.json("berhasil diupdate")
    } catch (err) {
        console.log(err.message)
    }
})


//===================================================