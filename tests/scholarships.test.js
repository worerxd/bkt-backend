/* eslint-disable no-undef */
const mongoose = require('mongoose')
const supertest = require('supertest');
const { app, server } = require('../app');
const Scholarship = require('../api/scholarship/scholarship.model')
const { initialScholarships } = require('./helpers')

const api = supertest(app);

beforeEach(async () => {
  await Scholarship.deleteMany({});

  await Scholarship.create(initialScholarships[0]);
  await Scholarship.create(initialScholarships[1]);
})

test('scholarships are returned as json', async() => {
  await api
    .get('/api/scholarships')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('the first sholarship has title Santander Scholarships...', async () => {
  const response = await api.get('/api/scholarships');
  const titles = response.body.map(scholarship => scholarship.title);
  expect(titles).toContain('Santander Scholarships Women | W50 Leadership 2022');
})

test('the are two scholarships', async () => {
  const response = await api.get('/api/scholarships');
  expect(response.body).toHaveLength(initialScholarships.length)
})

test('a scholarship can be return by id', async () => {
  const response = await api.get('/api/scholarships');
  const id = response.body[0]._id;

  const scholarshipResponse = await api.get(`/api/scholarships/${id}`);
  expect(scholarshipResponse.body._id).toContain(response.body[0]._id)
})

test('a valid scholarship can be created', async () => {
  const newScholarship = {
    title: 'Testing Scholarships | Make It Real',
    hoster: 'Make It Real',
    imageUrl: 'https://www.pronabec.gob.pe/wp-content/uploads/2021/02/Talentos-Pronabec-3.jpg',
    description: 'The Becas Santander Women | Emerging Leaders 2022 - LSE is an intensive online programme designed to enhance your negotiation skills to become more influential, persuasive and impactful in your role and throughout your career to advance and succeed in leadership positions.This is a unique scholarship opportunity for 125 women, who are managers to mid-level managers looking to progress into upper-management positions, to connect with a diverse community of aspiring leaders from around the world in a unified online environment.',
    date: { start: new Date(19, 2, 2022), end: new Date(19, 3, 2022) },
    tags: [{ name: 'women' }, { name: 'presencial' }],
    target: { directedTo: 'Joven Profesional, Profesional experimentado', fromUniversity: 'Cualquier universidad' },
    duration: '15 semanas',
    spots: 300,
    requirements: {
      title: 'Eligibility criteria',
      list: [{
        item: 'Women managers to mid-level managers looking to progress in their careers.'
      }, {
        item: 'Resident in any of the following countries: Argentina, Brazil, Chile, Colombia, Germany, Mexico, Peru, Poland, Portugal, Spain, UK, USA, or Uruguay.'
      }, {
        item: 'English level: Fluency in English equivalent to C1'
      }]
    },
    status: 'approved'
  }

  await api.post('/api/scholarships').send(newScholarship).expect(201).expect('Content-Type', /application\/json/)

  const response = await api.get('/api/scholarships');

  const titles = response.body.map(scholarship => scholarship.title);

  expect(response.body).toHaveLength(initialScholarships.length + 1)
  expect(titles).toContain(newScholarship.title);
})
test('a scholarship without title cant be added', async () => {
  const newScholarship = {
    hoster: 'Make It Real',
    imageUrl: 'https://www.pronabec.gob.pe/wp-content/uploads/2021/02/Talentos-Pronabec-3.jpg',
    description: 'The Becas Santander Women | Emerging Leaders 2022 - LSE is an intensive online programme designed to enhance your negotiation skills to become more influential, persuasive and impactful in your role and throughout your career to advance and succeed in leadership positions.This is a unique scholarship opportunity for 125 women, who are managers to mid-level managers looking to progress into upper-management positions, to connect with a diverse community of aspiring leaders from around the world in a unified online environment.',
    date: { start: new Date(19, 2, 2022), end: new Date(19, 3, 2022) },
    tags: [{ name: 'women' }, { name: 'presencial' }],
    target: { directedTo: 'Joven Profesional, Profesional experimentado', fromUniversity: 'Cualquier universidad' },
    duration: '15 semanas',
    spots: 300,
    requirements: {
      title: 'Eligibility criteria',
      list: [{
        item: 'Women managers to mid-level managers looking to progress in their careers.'
      }, {
        item: 'Resident in any of the following countries: Argentina, Brazil, Chile, Colombia, Germany, Mexico, Peru, Poland, Portugal, Spain, UK, USA, or Uruguay.'
      }, {
        item: 'English level: Fluency in English equivalent to C1'
      }]
    },
    status: 'approved'
  }

  await api.post('/api/scholarships').send(newScholarship).expect(500).expect('Content-Type', /application\/json/)

  const response = await api.get('/api/scholarships');

  expect(response.body).toHaveLength(initialScholarships.length);
})

afterAll(() => {
  mongoose.connection.close();
  server.close();
})
