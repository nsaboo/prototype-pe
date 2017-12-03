const router = require('express').Router();
const controller = require('../controllers');

// user routes
router.get('/user', controller.user.get);
router.put('/user', controller.user.put);
router.post('/user', controller.user.post);

// illness routes
router.get('/illness', controller.illness.get);
router.put('/illness', controller.illness.put);
router.post('/illness', controller.illness.post);

// city routes
router.get('/city', controller.city.get);
router.put('/city', controller.city.put);
router.post('/city', controller.city.post);

// patient routes
router.get('/patient', controller.patient.get);
router.put('/patient', controller.patient.put);
router.post('/patient', controller.patient.post);

// hospital routes
router.get('/hospital', controller.hospital.get);
router.put('/hospital', controller.hospital.put);
router.post('/hospital', controller.hospital.post);

// doctor routes
router.get('/doctor', controller.doctor.get);
router.put('/doctor', controller.doctor.put);
router.post('/doctor', controller.doctor.post);

// laboratory routes
router.get('/laboratory', controller.laboratory.get);
router.put('/laboratory', controller.laboratory.put);
router.post('/laboratory', controller.laboratory.post);

// prescription routes
router.get('/prescription', controller.prescription.get);
router.put('/prescription', controller.prescription.put);
router.post('/prescription', controller.prescription.post);

// pharmacy routes
router.get('/pharmacy', controller.pharmacy.get);
router.put('/pharmacy', controller.pharmacy.put);
router.post('/pharmacy', controller.pharmacy.post);

// insurer routes
router.get('/insurer', controller.insurer.get);
router.put('/insurer', controller.insurer.put);
router.post('/insurer', controller.insurer.post);

// company routes
router.get('/company', controller.company.get);
router.put('/company', controller.company.put);
router.post('/company', controller.company.post);

module.exports = router;
