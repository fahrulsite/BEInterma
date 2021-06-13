const express = require("express");
const app = express();
const db = require('./config/db.js');
const Donatur = require("./models/Donatur.js");
const Donasi = require("./models/Donasi.js");

app.get('/', (req, res)=> res.send('response berhasil'));
app.use(express.urlencoded({extended:true}));
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
app.get('/donatur/:id', async (req, res)=>{
    try {
        const id = req.params.id
        const getDonatur = await Donatur.findOne({
            where : {id_donatur : id}
        })
        res.json(getDonatur)
    } catch (err) {
        console.log(err.message);
    }
})

//delete donatur by id
app.delete('/donatur/:id', async (req, res)=>{
    try {
        const id = req.params.id
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
app.put('/donatur/:id', async (req, res)=>{
    try {
        const {nama, alamat, kontak, photo} = req.body
        const id = req.params.id
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
        const getAllDonasi = await Donasi.findAll({});
        res.json(getAllDonasi);

    } catch (err) {
        console.log(err.message);
    }
})

//get donasi by id
app.get('/donasi/:id', async (req, res)=>{
    try {
        const id = req.params.id
        const getDonasi = await Donasi.findOne({
            where : {id_donasi : id}
        },  await Donatur.findOne({
            where : {id_donatur : 1}
        })) 
       
        res.json(getDonasi)
    } catch (err) {
        console.log(err.message);
    }
})

//delete donatur by id
app.delete('/donasi/:id', async (req, res)=>{
    try {
        const id = req.params.id
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
app.put('/donasi/:id', async (req, res)=>{
    try {
        const {id_donatur, tanggal, jumlah, bukti} = req.body
        const id = req.params.id
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
db.authenticate().then(()=>
    console.log('berhasil konek')
);
app.listen(4500, ()=>{
    console.log("port berjalan di 5000");
})

