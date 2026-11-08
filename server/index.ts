const express = require('express');
const path = require('path');
const cors = require('cors');
const router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(compression());

// Serve the inner site (UgyenOS) static assets at /inner-site
app.use('/inner-site', express.static(path.resolve(__dirname, '../../inner-site-src/build')));

// Have Node serve the files for our built React app (public folder)
app.use(express.static(path.resolve(__dirname, '../public')));

// Serve the built inner-site index.html for /inner-site and all client-side sub-routes (e.g. /inner-site/projects)
app.get(['/inner-site', '/inner-site/*'], (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../inner-site-src/build/index.html'));
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Handle GET requests to /api route
app.post('/api/send-email', (req, res) => {
    const { name, company, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.FOLIO_EMAIL,
            pass: process.env.FOLIO_PASSWORD,
        },
    });

    transporter
        .verify()
        .then(() => {
            transporter
                .sendMail({
                    from: `"${name}" <pugyen82@gmail.com>`, // sender address
                    to: 'pugyen82@gmail.com', // list of receivers
                    subject: `${name} <${email}> ${
                        company ? `from ${company}` : ''
                    } submitted a contact form`, // Subject line
                    text: `${message}`, // plain text body
                })
                .then((info) => {
                    console.log({ info });
                    res.json({ message: 'success' });
                })
                .catch((e) => {
                    console.error(e);
                    res.status(500).send(e);
                });
        })
        .catch((e) => {
            console.error(e);
            res.status(500).send(e);
        });
});

// listen to app on port 8080
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
