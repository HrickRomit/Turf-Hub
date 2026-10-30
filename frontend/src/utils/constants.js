import turfCardImg from '../assets/turf-card.jpg';
import turfBashundharaImg from '../assets/turf-bashundhara.jpg';
import turfDhanmondiImg from '../assets/turf-dhanmondi.jpg';
import turfUttaraImg from '../assets/turf-uttara.jpg';
import turfMirpurImg from '../assets/turf-mirpur.jpg';

export const DHAKA_ZONES = [
  { id: 'all', name: 'All Dhaka' },
  { id: 'bashundhara', name: 'Bashundhara R/A' },
  { id: 'dhanmondi', name: 'Dhanmondi' },
  { id: 'uttara', name: 'Uttara' },
  { id: 'mirpur', name: 'Mirpur' },
  { id: 'gulshan', name: 'Gulshan & Banani' },
  { id: 'mohammadpur', name: 'Mohammadpur' },
];

export const TIME_SLOTS = [
  { id: 'slot-1', time: '04:00 PM - 05:00 PM', label: 'Afternoon Kickoff', tag: 'Available' },
  { id: 'slot-2', time: '05:00 PM - 06:00 PM', label: 'Sunset Match', tag: 'Fast Filling' },
  { id: 'slot-3', time: '06:00 PM - 07:00 PM', label: 'Prime Evening', tag: 'Hot' },
  { id: 'slot-4', time: '07:00 PM - 08:00 PM', label: 'Peak Hour', tag: 'Popular' },
  { id: 'slot-5', time: '08:00 PM - 09:00 PM', label: 'Prime Night', tag: 'Hot' },
  { id: 'slot-6', time: '09:00 PM - 10:00 PM', label: 'Night Match', tag: 'Available' },
  { id: 'slot-7', time: '10:00 PM - 11:00 PM', label: 'Night Owl Match', tag: 'Discounted' },
  { id: 'slot-8', time: '11:00 PM - 12:00 AM', label: 'Midnight Session', tag: 'Available' },
];

export const FEATURED_TURFS = [
  {
    id: 'jaff-arena',
    name: 'JAFF Arena – Bashundhara R/A',
    zone: 'bashundhara',
    zoneName: 'Bashundhara R/A',
    address: 'Block I, Road 8, Bashundhara R/A, Dhaka',
    price: 2500,
    rating: 4.8,
    reviewsCount: 194,
    size: '7-a-side',
    surface: 'Outdoor Artificial Grass',
    amenities: ['Parking', 'Changing Rooms', 'Floodlights', 'Cafeteria', 'FIFA Grade Turf'],
    image: turfCardImg,
    badge: 'Popular Choice',
    distance: '1.2 km from 300 Feet Rd',
  },
  {
    id: 'skyturf-dhanmondi',
    name: 'SkyTurf – Dhanmondi',
    zone: 'dhanmondi',
    zoneName: 'Dhanmondi',
    address: 'Satmasjid Road, Level 8, Dhanmondi, Dhaka',
    price: 2800,
    rating: 4.9,
    reviewsCount: 248,
    size: '6-a-side',
    surface: 'Rooftop Artificial Grass',
    amenities: ['Rooftop View', 'Floodlights', 'AC Lounge', 'Changing Rooms', 'Live Scoreboard'],
    image: turfDhanmondiImg,
    badge: 'Rooftop Arena',
    distance: 'Near Shimanto Square',
  },
  {
    id: 'turf-54-uttara',
    name: 'Turf 54 – Sector 11, Uttara',
    zone: 'uttara',
    zoneName: 'Uttara',
    address: 'Plot 54, Sector 11, Uttara Model Town, Dhaka',
    price: 2200,
    rating: 4.7,
    reviewsCount: 165,
    size: '7-a-side',
    surface: 'Premium Synthetic Grass',
    amenities: ['Parking', 'Shower Room', 'Bibs & Balls', 'Dugouts'],
    image: turfUttaraImg,
    badge: 'Value Pick',
    distance: '3 mins from Gareeb-e-Nawaz Ave',
  },
  {
    id: 'metroturf-mirpur',
    name: 'MetroTurf Arena – Mirpur',
    zone: 'mirpur',
    zoneName: 'Mirpur',
    address: 'Adjacent to Mirpur DOHS, Mirpur 12, Dhaka',
    price: 1900,
    rating: 4.6,
    reviewsCount: 132,
    size: '6-a-side',
    surface: 'Covered Synthetic Turf',
    amenities: ['Rainproof Canopy', 'Floodlights', 'Free Parking', 'Refreshments'],
    image: turfMirpurImg,
    badge: 'All-Weather Covered',
    distance: '5 mins from Mirpur 12 Metro Station',
  },
  {
    id: 'velocity-gulshan',
    name: 'Velocity Sports Arena – Gulshan',
    zone: 'gulshan',
    zoneName: 'Gulshan & Banani',
    address: 'Madani Avenue, Near US Embassy, Gulshan, Dhaka',
    price: 3200,
    rating: 4.9,
    reviewsCount: 312,
    size: '8-a-side',
    surface: 'FIFA 2-Star Quality Turf',
    amenities: ['VIP Lounge', 'HD Match Recording', 'Changing Rooms', 'Juice Bar'],
    image: turfBashundharaImg,
    badge: 'Pro Tier',
    distance: 'Near Notun Bazar Circle',
  },
];

export const LIVE_BOOKING_EVENTS = [
  { id: 1, user: 'Rahat', turf: 'JAFF Arena', time: '2 mins ago', location: 'Bashundhara' },
  { id: 2, user: 'Tanvir', turf: 'SkyTurf', time: '5 mins ago', location: 'Dhanmondi' },
  { id: 3, user: 'Farhan', turf: 'Turf 54', time: '7 mins ago', location: 'Uttara' },
  { id: 4, user: 'Shakil', turf: 'MetroTurf Arena', time: '11 mins ago', location: 'Mirpur' },
  { id: 5, user: 'Abrar', turf: 'Velocity Arena', time: '14 mins ago', location: 'Gulshan' },
];

export const PLATFORM_STATS = [
  { value: '45+', label: 'Verified Turfs in Dhaka' },
  { value: '10 Min', label: 'Atomic Slot Lock Guarantee' },
  { value: '0%', label: 'Double Booking Rate' },
  { value: '18.5k+', label: 'Matches Scheduled' },
];

