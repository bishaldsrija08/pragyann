const Workshop = require('./models/Workshop');
const PersonalClass = require('./models/PersonalClass');

const defaultWorkshops = [
  {
    title: 'Python for Beginners',
    date: '2026-06-13',
    day: 'Saturday',
    startTime: '11:00 AM',
    endTime: '01:00 PM',
    link: 'https://meet.google.com/example-python',
    isDefault: true,
    isCustom: false
  }
];

const defaultPersonalClasses = [
  {
    title: 'Computer Class (Grades 2–5)',
    description:
      'Fun and interactive computer basics for young learners covering typing, internet safety, Microsoft Office basics, and essential digital skills.',
    level: 'Beginner',
    duration: '1 hour per session',
    price: 'Contact for pricing'
  },
  {
    title: 'Python Basics',
    description:
      'Step-by-step introduction to Python programming covering variables, data types, loops, functions, and building simple real-world projects.',
    level: 'Beginner to Intermediate',
    duration: '1.5 hours per session',
    price: 'Contact for pricing'
  }
];

const seedDatabase = async () => {
  try {
    const workshopCount = await Workshop.countDocuments({ isDefault: true });
    if (workshopCount === 0) {
      await Workshop.insertMany(defaultWorkshops);
      console.log('Default workshops seeded');
    }

    const classCount = await PersonalClass.countDocuments();
    if (classCount === 0) {
      await PersonalClass.insertMany(defaultPersonalClasses);
      console.log('Default personal classes seeded');
    }
  } catch (err) {
    console.error('Seeding error:', err.message);
  }
};

module.exports = seedDatabase;
