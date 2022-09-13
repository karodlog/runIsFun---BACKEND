const jwt = require('jsonwebtoken');

const { JWT_AUDIENCE, JWT_ISSUER, JWT_SECRET } = process.env;
console.log(JWT_SECRET);

const jwtUtils = {
    //Fonction pour générer un token
    generate: ({ id, pseudo, role }) => {
        return new Promise((resolve, reject) => {
            const payload = { id, pseudo, role };

            //Création des options (du header)
            const options = {
                algorithm: 'HS512', //HS256
                expiresIn: '800h',
                audience: JWT_AUDIENCE,
                issuer: JWT_ISSUER
            }
            jwt.sign(payload, JWT_SECRET, options, (error, token) => {
                if (error) {
                    return reject(error);
                }
                resolve(token);
            })

        });
    },
    //Fonction pour décoder un token
    decode: (token) => {
        //Dans le cas où on n'a pas de token
        if (!token) {
            return Promise.reject(new Error('No Token'));
        }
        return new Promise((resolve, reject) => {
            const options = {
                audience : JWT_AUDIENCE,
                issuer : JWT_ISSUER
            }
            jwt.verify(token, JWT_SECRET , options, (error, payload) => {
                //Si on n'a pas réussi à décoder
                if(error){
                    return reject(error);
                }
                resolve(payload);
            })

        });
    }
}

module.exports = jwtUtils;