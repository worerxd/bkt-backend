const initialScholarships = [
  {
    title: 'Santander Scholarships Women | W50 Leadership 2022',
    hoster: 'London School of Economics And Political Science',
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
  },
  {
    title: 'Becas Santander Women | Emerging Leaders 2022  - LSE',
    imageUrl: 'https://portal.andina.pe/EDPfotografia3/Thumbnail/2022/01/16/000839600W.jpg',
    hoster: 'London School of Economics And Political Science',
    description: 'The Becas Santander Women | Emerging Leaders 2022 - LSE is an intensive online programme designed to enhance your negotiation skills to become more influential, persuasive and impactful in your role and throughout your career to advance and succeed in leadership positions.This is a unique scholarship opportunity for 125 women, who are managers to mid-level managers looking to progress into upper-management positions, to connect with a diverse community of aspiring leaders from around the world in a unified online environment.',
    date: { start: new Date(19, 2, 2022), end: new Date(19, 3, 2022) },
    tags: [{ name: 'women' }, { name: 'online' }],
    target: { directedTo: 'Joven Profesional, Profesional experimentado', fromUniversity: 'Cualquier universidad' },
    duration: '12 semanas',
    spots: 5000,
    requirements: { title: 'Eligibility criteria', list: [{ item: 'Women managers to mid-level managers looking to progress in their careers.' }, { item: 'Resident in any of the following countries: Argentina, Brazil, Chile, Colombia, Germany, Mexico, Peru, Poland, Portugal, Spain, UK, USA, or Uruguay.' }, { item: 'English level: Fluency in English equivalent to C1' }] },
    status: 'approved'
  }
]

const initialUsers = [
  {
    fullName: 'Walther Vergaray',
    email: 'walther.vergaray@gmail.com',
    password: '123456'
  },
  {
    fullName: 'Luis Baldeon',
    email: 'luis.baldeon@gmail.com',
    password: '123456'
  },
  {
    fullName: 'Raul Lavado',
    email: 'raul.lavado@gmail.com',
    password: '123456'
  },
]

module.exports = { initialScholarships, initialUsers }
