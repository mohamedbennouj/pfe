'use strict';

var knex = require('../config');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../app-config');


exports.register = function (req, res) {
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    // validate
    // insert into users(prenom, nom, emqil, motdepass) values (req.body.firstname, )
    knex('utilisateur').insert(
        {
            prenom: req.body.firstName,
            nom: req.body.lastName,
            email: req.body.email,
            motdepasse: req.body.password,
        })
        .then(function (id) {
            res.json({
                error: false,
                data: id
            })
        })
        .catch(function (err) {
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        });
    };

        exports.login = function(req, res){
            let user;
            knex('utilisateur')
                .where('email', '=', req.body.email)
            .then( async rsp => {
                if(rsp && rsp.length!=1){
                    res.status(404).json({
                        error: true,
                        data: 'utilisateur inéxistant !'
                    });
                }
                user = rsp[0];
                console.log(user.MotDePasse);
                //let passwordIsValid = await bcrypt.compare(req.body.password, user.MotDePasse);
                let passwordIsValid = req.body.password === user.MotDePasse;
                console.log(passwordIsValid);
                if (!passwordIsValid) {
                    return res.status(401).json({
                        error: true,
                        data: {
                            auth: false,
                            token: null
                        }
                    }) 
                }

                var token = jwt.sign({ user: user }, config.secret, {
                    expiresIn: 86400 // expires in 24 hours
                });
                
                res.json({
                    error: false,
                    data: {
                        token: token
                    }
                });
            })
            .catch(function (err) {
                res.status(500).json({
                    error: true,
                    data: {
                        message: err.message
                    }
                })
            });
        
        };

exports.index = function(req, res) {
    knex.select().table('utilisateur')
        .then(function(rsp){
            res.json({error: false, data: rsp});          
        })
        .catch(function(err){
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            });
        })
};