import { Images } from '../data/images';

const InitialState = {
  selectedDog: '',
  dogData: {
    1: {
      name: 'Tala',
      breed: 'German Shepard',
      age: '3 years',
      gender: 'female',
      size: 'Large',
      description: 'Tala is a puppy at heart, and love sto roll around in the dirt. She is still figuring out how big her body is.',
      profilePhoto: Images.Tala4,
      photos: {
        1: Images.Tala1,
        2: Images.Tala2,
        3: Images.Tala3,
        4: Images.Tala4,
      },
      key: 1,
    },
    2: {
      name: 'Mobley',
      age: '4 years',
      gender: 'male',
      size: 'Small',
      breed: 'Chihuahua / Corgi Mix',
      description: 'Tala is a puppy at heart, and love sto roll around in the dirt. She is still figuring out how big her body is.',
      profilePhoto: Images.Mobley1,
      photos: [Images.Mobley1, Images.Mobley2, Images.Mobley3, Images.Mobley4, Images.Mobley5, Images.Mobley6, Images.Mobley7, Images.Mobley8, Images.Mobley9, Images.Mobley10],
      key: 2,
    },
    3: {
      name: 'Sadie',
      age: '10 years',
      gender: 'female',
      size: 'Large',
      breed: 'Golden Retreiver',
      description: 'Tala is a puppy at heart, and love sto roll around in the dirt. She is still figuring out how big her body is.',
      profilePhoto: Images.sadie1,
      photos: [Images.sadie1, Images.sadie2],
      key: 3,
    },
    4: {
      name: 'Doug',
      age: '2 years',
      gender: 'male',
      breed: 'Chihuahua',
      size: 'Small',
      description: 'Tala is a puppy at heart, and love sto roll around in the dirt. She is still figuring out how big her body is.',
      profilePhoto: Images.doug3,
      photos: [Images.doug1, Images.doug2, Images.doug3, Images.doug4, Images.doug5, Images.doug6, Images.doug7],
      key: 4,
    },
    5: {
      name: 'Susan',
      age: '2 years',
      gender: 'female',
      breed: 'Cocker Spaniel',
      size: 'Medium',
      description: 'Tala is a puppy at heart, and love sto roll around in the dirt. She is still figuring out how big her body is.',
      profilePhoto: Images.Susan1,
      photos: [Images.Susan1, Images.Susan2],
      key: 5,
    },
    6: {
      name: 'Buko',
      age: '3 years',
      gender: 'male',
      breed: 'Chuihuahua / Corgi Mix',
      size: 'Medium',
      description: 'Tala is a puppy at heart, and love sto roll around in the dirt. She is still figuring out how big her body is.',
      profilePhoto: Images.buko1,
      photos: [Images.buko1, Images.buko2, Images.buko3, Images.buko4],
      key: 6,
    },
    7: {
      name: 'Aoife',
      age: '12 years',
      gender: 'female',
      breed: 'Labrador Retreiver',
      size: 'Large',
      description: 'Her name is Gaelic for "warrior princess". She’s always looking for spoils (of food).',
      profilePhoto: Images.aoife1,
      phptos: [Images.aoife1, Images.aoife2, Images.aoife3],
      key: 7,
    },
    8: {
      name: 'Rusty',
      age: '6 years',
      gender: 'male',
      breed: 'Golden Retreiver',
      size: 'Large',
      description: 'Only the most famous Instagram dog from portland. Hotties only ',
      profilePhoto: Images.rusty1,
      phptos: [Images.rusty1, Images.rusty2, Images.rusty3, Images.rusty4, Images.rusty5],
      key: 8,
    },
    9: {
      name: 'Alana',
      age: '1 years',
      gender: 'female',
      breed: 'Austrailian Shepard',
      description: 'Only the most famous Instagram dog from portland. Hotties only ',
      profilePhoto: Images.alana1,
      phptos: [Images.alana1],
      key: 9,
    },
    10: {
      name: 'Lola',
      age: '4 years',
      gender: 'female',
      breed: 'Shiba Inu',
      size: 'Medium',
      description: 'Only the most famous Instagram dog from portland. Hotties only ',
      profilePhoto: Images.lola1,
      photos: [Images.lola1],
      key: 10,
    },
    11: {
      name: 'Marko',
      age: '4 years',
      gender: 'male',
      breed: 'Siberian Husky',
      size: 'Large',
      description: 'Only the most famous Instagram dog from portland. Hotties only ',
      profilePhoto: Images.marko1,
      photos: [Images.marko1],
      key: 11,
    },
    12: {
      name: 'Roman',
      age: '1 years',
      gender: 'male',
      breed: 'Austrailian Shepard',
      size: 'Large',
      description: 'Only the most famous Instagram dog from portland. Hotties only ',
      profilePhoto: Images.roman1,
      photos: [Images.roman1],
      key: 12,
    },
  },
};

export default InitialState;
